import { Identifiable } from "libs/data-handling/src/models/identifiable.interface";
import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";

export interface Product extends Identifiable<string> {
  name: string;
  unit: string;
  quantity: number;
  manufacturer: Manufacturer;
}
