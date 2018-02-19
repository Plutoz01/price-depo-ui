import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserBase } from '../models/user-base.class';
import { SecurityState } from './security.state';

const getUser = ( state: SecurityState ): UserBase => state.user;

export const getSecurityStateSelector = createFeatureSelector<SecurityState>( 'security' );
export const getUserSelector = createSelector( getSecurityStateSelector, getUser );
