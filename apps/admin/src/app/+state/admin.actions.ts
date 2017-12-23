import { Action } from "@ngrx/store";
import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";

export const LOAD_MANUFACTURERS = 'LOAD_MANUFACTURERS';
export const MANUFACTURERS_LOADED = 'MANUFACTURERS_LOADED';

export class LoadManufacturersAction implements Action {
  readonly type = LOAD_MANUFACTURERS;
}

export class ManufacturersLoadedAction implements Action {
  readonly type = MANUFACTURERS_LOADED;

  constructor( public readonly manufacturers: Manufacturer[] ){}
}

export type AdminAction = LoadManufacturersAction | ManufacturersLoadedAction;

