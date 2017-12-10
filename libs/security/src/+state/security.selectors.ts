import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SecurityState } from "@price-depo-ui/security/src/+state/security.state";
import { UserBase } from "@price-depo-ui/security/src/models/user-base.class";
import { UserRole } from "@price-depo-ui/security/src/models/user-role.enum";

const getUser = ( state: SecurityState ): UserBase => state.user;
const isAnonymous = ( user: UserBase ): boolean => user.role === UserRole.ANONYMOUS;

export const getSecurityStateSelector = createFeatureSelector<SecurityState>( 'security' );
export const getUserSelector = createSelector( getSecurityStateSelector, getUser );
export const isAnonymousSelector = createSelector( getUserSelector, isAnonymous );
