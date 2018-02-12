import { UserBase } from '@price-depo-ui/security';
import { ROLE_ADMIN } from '../models/UserRole.type';

export const testUserBob = new UserBase( [ ROLE_ADMIN ],
  [
    'profile',
    'product.admin',
    'product.admin.chain-store',
    'product.admin.manufacturer',
    'product.admin.product',
    'product.admin.shop'
  ] );
