import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { AuthenticatedAction } from "@price-depo-ui/security/src/+state/security.actions";
import { testUserBob } from "@price-depo-ui/security/src/data/dummy-user.data";
import { AppState } from "../../+state/admin.interfaces";

@Component( {
  selector: 'pd-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: [ './page-header.component.scss' ]
} )
export class PageHeaderComponent {


  constructor( private store: Store<AppState> ) {
  }

  switchToTestUser() {
    this.store.dispatch( new AuthenticatedAction( testUserBob ) );
  }
}
