import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SecurityState } from "@price-depo-ui/security/src/+state/security.state";
import { UserBase } from "@price-depo-ui/security/src/models/user-base.class";

const getUser = ( state: SecurityState ): UserBase => state.user;

export const getSecurityStateSelector = createFeatureSelector<SecurityState>( 'security' );
export const getUserSelector = createSelector( getSecurityStateSelector, getUser );
