import { Identifiable } from "libs/data-handling/src/models/identifiable.interface";

export interface Product extends Identifiable<string> {
  name: string;
  barcode: string;
  manufacturerId: string;
}
