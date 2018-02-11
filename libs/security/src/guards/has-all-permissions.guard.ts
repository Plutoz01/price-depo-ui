import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { getUserSelector } from '../+state/security.selectors';
import { SecurityState } from '../+state/security.state';
import { UserBase } from '../models/user-base.class';

@Injectable()
export class HasAllPermissionsGuard implements CanActivate {
  static readonly permissionsKey = 'permissions';

  constructor( private store: Store<SecurityState> ) {
  }


  canActivate( route: ActivatedRouteSnapshot ): Observable<boolean> | boolean {
    const requiredPermissions = route.data[ HasAllPermissionsGuard.permissionsKey ] || [];

    if ( requiredPermissions.length < 1 ) {
      return true;
    }

    return this.store.select( getUserSelector ).map( ( user: UserBase ) =>
      requiredPermissions.every( ( requiredPermission: string ) => user.hasPermission( requiredPermission ) )
    );
  }
}
