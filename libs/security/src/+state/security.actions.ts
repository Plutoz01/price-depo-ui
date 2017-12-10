import { Action } from "@ngrx/store";
import { UserBase } from "@price-depo-ui/security/src/models/user-base.class";

export const AUTHENTICATED = 'action.security.authenticated';

export class AuthenticatedAction implements Action {
  readonly type = AUTHENTICATED;

  constructor( public readonly user: UserBase ){}
}

export type SecurityAction = AuthenticatedAction;
