import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Store } from "@ngrx/store";
import { getUserSelector } from "@price-depo-ui/security/src/+state/security.selectors";
import { SecurityState } from "@price-depo-ui/security/src/+state/security.state";
import { UserBase } from "@price-depo-ui/security/src/models/user-base.class";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

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
