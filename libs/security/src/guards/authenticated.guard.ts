import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { getUserSelector } from '../+state/security.selectors';
import { SecurityState } from '../+state/security.state';
import { UserBase } from '../models/user-base.class';

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  constructor( private store: Store<SecurityState> ) {
  }

  canActivate(): Observable<boolean> {
    return this.store.select( getUserSelector ).map( ( user: UserBase ) => user.isAuthenticated );
  }
}
