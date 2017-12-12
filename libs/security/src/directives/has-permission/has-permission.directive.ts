import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/observable/combineLatest";

import { getUserSelector } from "@price-depo-ui/security/src/+state/security.selectors";
import { SecurityState } from "@price-depo-ui/security/src/+state/security.state";
import { UserBase } from "@price-depo-ui/security/src/models/user-base.class";

@Directive( {
  selector: '[pdHasPermission]'
} )
export class HasPermissionDirective implements OnDestroy {

  private readonly updateSubscription: Subscription;
  private readonly desiredPermissionSource = new BehaviorSubject<string>( '' );
  private hasView = false;

  constructor( private templateRef: TemplateRef<any>,
               private viewContainer: ViewContainerRef,
               private store: Store<SecurityState> ) {
    this.updateSubscription = Observable.combineLatest(
      this.store.select( getUserSelector ),
      this.desiredPermissionSource
    ).subscribe( ( [ user, desiredPermission ]: [ UserBase, string ] ) => {
      const hasPermission = !!desiredPermission && user.hasPermission( desiredPermission );
      this.updateViewContainer( hasPermission );
    } );
  }

  @Input() set pdHasPermission( desiredPermission: string ) {
    this.desiredPermissionSource.next( desiredPermission );
  }

  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }

  updateViewContainer( hasPermission: boolean ) {
    if ( hasPermission && !this.hasView ) {
      this.viewContainer.createEmbeddedView( this.templateRef );
      this.hasView = true;
    } else if ( !hasPermission && this.hasView ) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
