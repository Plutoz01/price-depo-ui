import { Identifiable } from "@price-depo-ui/data-handling";

export interface Product extends Identifiable<string> {
  name: string;
  barcode: string;
  manufacturerId: string;
}
