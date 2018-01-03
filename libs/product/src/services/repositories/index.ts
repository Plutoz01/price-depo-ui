import { ChainStoreHttpRepository } from "libs/product/src/services/repositories/chain-store.http.repository";
import { ShopHttpRepository } from "libs/product/src/services/repositories/shop.http.repository";
import { ManufacturerHttpRepository } from "libs/product/src/services/repositories/manufacturer.http.repository";

export const repositories = [
  ChainStoreHttpRepository,
  ManufacturerHttpRepository,
  ShopHttpRepository
];
