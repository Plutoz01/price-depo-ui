import { Manufacturer } from '../../models/manufacturer.interface';

export function initialManufacturer(): Manufacturer {
  return {
    name: '',
    country: ''
  };
}
