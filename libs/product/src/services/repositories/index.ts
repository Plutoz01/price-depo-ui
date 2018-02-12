import { ChainStoreHttpRepository } from './chain-store.http.repository';
import { ManufacturerHttpRepository } from './manufacturer.http.repository';
import { ProductHttpRepository } from './product.http.repository';
import { ShopHttpRepository } from './shop.http.repository';

export const repositories = [
  ChainStoreHttpRepository,
  ManufacturerHttpRepository,
  ProductHttpRepository,
  ShopHttpRepository
];
