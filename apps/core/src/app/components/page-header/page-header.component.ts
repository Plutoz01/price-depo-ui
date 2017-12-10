import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { AuthenticatedAction } from "@price-depo-ui/security/src/+state/security.actions";
import { isAnonymousSelector } from "@price-depo-ui/security/src/+state/security.selectors";
import { testUserBob } from "@price-depo-ui/security/src/data/dummy-user.data";
import { Observable } from "rxjs/Observable";
import { AppState } from "../../+state/app.interfaces";

@Component( {
  selector: 'pd-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: [ './page-header.component.scss' ]
} )
export class PageHeaderComponent {

  isAnonymous$: Observable<boolean> = this.store.select( isAnonymousSelector );

  constructor( private store: Store<AppState> ) {
  }

  switchToTestUser() {
    this.store.dispatch( new AuthenticatedAction( testUserBob ) );
  }
}
