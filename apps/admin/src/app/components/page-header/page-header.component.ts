import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { AuthenticatedAction } from "@price-depo-ui/security/src/+state/security.actions";
import { testUserBob } from "@price-depo-ui/security/src/data/dummy-user.data";
import { AdminAppState } from "../../+state/admin.state";

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
