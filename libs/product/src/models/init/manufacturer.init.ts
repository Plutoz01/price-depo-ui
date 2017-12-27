import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";

export function initialManufacturer(): Manufacturer {
  return {
    name: '',
    country: ''
  };
}
