import { Directive, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Store } from "@ngrx/store";
import { getUserSelector } from "@price-depo-ui/security/src/+state/security.selectors";
import { SecurityState } from "@price-depo-ui/security/src/+state/security.state";
import { UserBase } from "@price-depo-ui/security/src/models/user-base.class";
import { Subscription } from "rxjs/Subscription";

@Directive( {
  selector: '[pdUserAuthenticated]'
} )
export class UserAuthenticatedDirective implements OnDestroy {
  private updateSubscription: Subscription;
  private hasView = false;

  constructor( private templateRef: TemplateRef<any>,
               private viewContainer: ViewContainerRef,
               private store: Store<SecurityState> ) {
    this.updateSubscription = this.store.select( getUserSelector ).subscribe(
      ( user: UserBase ) => this.updateViewContainer( user.isAuthenticated )
    );
  }

  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }

  updateViewContainer( isAuthenticated: boolean ) {
    if ( !isAuthenticated && this.hasView ) {
      this.viewContainer.clear();
      this.hasView = false;
    } else if( isAuthenticated && !this.hasView ){
      this.viewContainer.createEmbeddedView( this.templateRef );
      this.hasView = true;
    }
  }
}
