import { UserBase } from '../models/user-base.class';
import { SecurityState } from './security.state';

export const securityInitState: SecurityState = {
  user: new UserBase( [] )
};
