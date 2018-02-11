import { Product } from "../../models/product.interface";

export function initialProduct(): Product {
  return {
    name: '',
    barcode: '',
    manufacturerId: null
  };
}
