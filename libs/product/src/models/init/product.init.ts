import { Product } from "@price-depo-ui/product/src/models/product.interface";

export function initialProduct(): Product {
  return {
    name: '',
    barcode: '',
    manufacturerId: null
  };
}
