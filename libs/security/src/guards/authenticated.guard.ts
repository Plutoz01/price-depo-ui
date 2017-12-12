import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Store } from "@ngrx/store";
import { getUserSelector } from "@price-depo-ui/security/src/+state/security.selectors";
import { SecurityState } from "@price-depo-ui/security/src/+state/security.state";
import { UserBase } from "@price-depo-ui/security/src/models/user-base.class";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class AuthenticatedGuard implements CanActivate {

  constructor( private store: Store<SecurityState> ) {
  }

  canActivate(): Observable<boolean> {
    return this.store.select( getUserSelector ).map( ( user: UserBase ) => user.isAuthenticated );
  }
}
