import { Directive, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Store } from "@ngrx/store";
import { isAnonymousSelector } from "@price-depo-ui/security/src/+state/security.selectors";
import { SecurityState } from "@price-depo-ui/security/src/+state/security.state";
import { Subscription } from "rxjs/Subscription";

@Directive( {
  selector: '[pdUserAuthenticated]'
} )
export class UserAuthenticatedDirective implements OnDestroy {
  private userSubscription: Subscription;

  constructor( private templateRef: TemplateRef<any>,
               private viewContainer: ViewContainerRef,
               private store: Store<SecurityState> ) {
    this.store.select( isAnonymousSelector ).subscribe(
      ( isAnonymous: boolean ) => this.updateViewContainer( isAnonymous )
    );
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  updateViewContainer( isAnonymous: boolean ) {
    if ( isAnonymous ) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView( this.templateRef );
    }
  }
}
