import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SecurityState } from "./security.state";
import { UserBase } from "../models/user-base.class";

const getUser = ( state: SecurityState ): UserBase => state.user;

export const getSecurityStateSelector = createFeatureSelector<SecurityState>( 'security' );
export const getUserSelector = createSelector( getSecurityStateSelector, getUser );
