import { Manufacturer } from "@price-depo-ui/product/src/common/models/manufacturer.interface";

export interface Product {
  id: string;
  name: string;
  unit: string;
  quantity: number;
  manufacturer: Manufacturer;
}
