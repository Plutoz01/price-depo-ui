import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Store } from "@ngrx/store";
import { getUserSelector } from "@price-depo-ui/security/src/+state/security.selectors";
import { SecurityState } from "@price-depo-ui/security/src/+state/security.state";
import { UserBase } from "@price-depo-ui/security/src/models/user-base.class";
import { UserRole } from "@price-depo-ui/security/src/models/user-role.enum";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Directive( {
  selector: '[pdHasAnyRole]'
} )
export class HasAnyRoleDirective implements OnDestroy {

  private updateSubscription: Subscription;
  private acceptedRolesSource = new BehaviorSubject<string[]>( [] );
  private hasView = false;

  constructor( private templateRef: TemplateRef<any>,
               private viewContainer: ViewContainerRef,
               private store: Store<SecurityState> ) {
    this.updateSubscription = Observable.combineLatest(
      this.store.select( getUserSelector ),
      this.acceptedRolesSource
    ).subscribe( ( [ user, acceptedRoles ]: [ UserBase, UserRole[] ] ) => {
      const hasAnyRole = !!acceptedRoles && user.hasAnyRole( acceptedRoles );
      this.updateViewContainer( hasAnyRole );
    } );
  }

  @Input() set pdHasAnyRole( acceptedRoles: string[] ) {
    this.acceptedRolesSource.next( acceptedRoles );
  }

  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }

  updateViewContainer( hasAnyRole: boolean ) {
    if ( hasAnyRole && !this.hasView ) {
      this.viewContainer.createEmbeddedView( this.templateRef );
      this.hasView = true;
    } else if ( !hasAnyRole && this.hasView ) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
