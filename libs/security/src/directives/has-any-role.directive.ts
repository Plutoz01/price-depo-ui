import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { getUserSelector } from '../+state/security.selectors';
import { SecurityState } from '../+state/security.state';
import { UserBase } from '../models/user-base.class';

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
    ).subscribe( ( [ user, acceptedRoles ]: [ UserBase, string[] ] ) => {
      const hasAnyRole = !!acceptedRoles && user.hasAnyRole( acceptedRoles );
      this.updateViewContainer( hasAnyRole );
    } );
  }

  @Input()
  set pdHasAnyRole( acceptedRoles: string[] ) {
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
