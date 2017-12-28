import { initialAddress } from "@price-depo-ui/product/src/models/init/address.init";
import { Shop } from "@price-depo-ui/product/src/models/shop.interface";

export function initialShop(): Shop {
  return {
    name: '',
    address: initialAddress(),
    chainStoreId: null
  };
}
