import { Shop } from '../../models/shop.interface';
import { initialAddress } from './address.init';

export function initialShop(): Shop {
  return {
    name: '',
    address: initialAddress(),
    chainStoreId: null
  };
}
