import { UserBase } from "../models/user-base.class";
import { UserRole } from "../models/user-role.enum";

export const testUserBob = new UserBase( UserRole.REGULAR_USER, [ 'profile' ] );