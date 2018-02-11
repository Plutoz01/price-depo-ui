import { Address } from '../../models/address.interface';

export function initialAddress(): Address {
  return {
    country: '',
    postCode: '',
    settlement: '',
    street: '',
    number: ''
  };
}
