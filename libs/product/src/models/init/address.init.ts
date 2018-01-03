import { Address } from "@price-depo-ui/product/src/models/address.interface";

export function initialAddress(): Address {
  return {
    country: '',
    postCode: '',
    settlement: '',
    street: '',
    number: ''
  };
}
