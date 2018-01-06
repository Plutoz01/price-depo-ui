import { UserBase } from "../models/user-base.class";
import { UserRole } from "../models/user-role.enum";

export const testUserBob = new UserBase( UserRole.REGULAR_USER,
  [
    'profile',
    'product.admin',
    'product.admin.chain-store',
    'product.admin.manufacturer',
    'product.admin.product',
    'product.admin.shop'
  ] );
