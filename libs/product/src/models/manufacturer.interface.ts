import { Identifiable } from '@price-depo-ui/data-handling';

export interface Manufacturer extends Identifiable<string> {
  name: string;
  country: string;
}
