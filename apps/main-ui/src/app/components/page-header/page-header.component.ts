import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthenticatedAction, UserBase } from '@price-depo-ui/security';
import { AppState } from '../../+state/app.interfaces';

@Component( {
  selector: 'pd-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: [ './page-header.component.scss' ]
} )
export class PageHeaderComponent {
  constructor( private store: Store<AppState> ) {
  }

  switchToTestUser() {
    this.store.dispatch( new AuthenticatedAction( new UserBase() ) );
  }
}
