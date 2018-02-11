import { initialAddress } from './address.init';
import { Shop } from '../../models/shop.interface';

export function initialShop(): Shop {
  return {
    name: '',
    address: initialAddress(),
    chainStoreId: null
  };
}
