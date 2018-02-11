import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { AuthenticatedAction } from "@price-depo-ui/security";

import { AdminAppState } from "../../+state/admin.state";
import { testUserBob } from "../../data/dummy-user.data";

@Component( {
  selector: 'pd-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: [ './page-header.component.scss' ]
} )
export class PageHeaderComponent {


  constructor( private store: Store<AdminAppState> ) {
  }

  switchToTestUser() {
    this.store.dispatch( new AuthenticatedAction( testUserBob ) );
  }
}
