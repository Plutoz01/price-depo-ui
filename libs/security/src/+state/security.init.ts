import { SecurityState } from './security.state';
import { UserBase } from '../models/user-base.class';

export const securityInitState: SecurityState = {
    user: new UserBase( [] )
};
