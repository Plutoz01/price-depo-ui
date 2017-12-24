import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";

export interface AdminState {
  manufacturers: Manufacturer[];
  selectedManufacturer?: Manufacturer;
}

export interface AppState {
  readonly admin: AdminState;
}
