import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Store } from "@ngrx/store";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { getUserSelector } from "../+state/security.selectors";
import { SecurityState } from "../+state/security.state";
import { UserBase } from "../models/user-base.class";

@Directive( {
  selector: '[pdAuthenticated]'
} )
export class AuthenticatedDirective implements OnDestroy {

  private readonly updateSubscription: Subscription;
  private readonly shouldAuthenticatedSource = new BehaviorSubject<boolean>( true );
  private hasView = false;

  constructor( private templateRef: TemplateRef<any>,
               private viewContainer: ViewContainerRef,
               private store: Store<SecurityState> ) {
    this.updateSubscription = Observable.combineLatest(
      this.store.select( getUserSelector ),
      this.shouldAuthenticatedSource
    ).subscribe( ( [ user, shouldAuthenticated ]: [ UserBase, boolean ] ) => {
      this.updateViewContainer( user.isAuthenticated, shouldAuthenticated );
    } );
  }

  @Input() set pdAuthenticated( shouldAuthenticated: boolean ) {
    this.shouldAuthenticatedSource.next( shouldAuthenticated );
  }

  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }

  updateViewContainer( isAuthenticated: boolean, shouldAuthenticated: boolean ) {
    if ( this.shouldClearView( isAuthenticated, shouldAuthenticated ) ) {
      this.viewContainer.clear();
      this.hasView = false;
    } else if ( this.shouldCreateView( isAuthenticated, shouldAuthenticated ) ) {
      this.viewContainer.createEmbeddedView( this.templateRef );
      this.hasView = true;
    }
  }

  shouldClearView( isAuthenticated: boolean, shouldAuthenticated: boolean ): boolean {
    return this.hasView && isAuthenticated !== shouldAuthenticated;
  }

  shouldCreateView( isAuthenticated: boolean, shouldAuthenticated: boolean ): boolean {
    return !this.hasView && isAuthenticated !== shouldAuthenticated;
  }
}
