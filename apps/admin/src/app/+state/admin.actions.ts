import { Action } from "@ngrx/store";
import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";

export const LOAD_MANUFACTURERS = 'LOAD_MANUFACTURERS';
export const MANUFACTURERS_LOADED = 'MANUFACTURERS_LOADED';
export const LOAD_MANUFACTURER = 'LOAD_MANUFACTURER';
export const MANUFACTURER_LOADED = 'MANUFACTURER_LOADED';
export const NEW_MANUFACTURER = 'NEW_MANUFACTURER';
export const SAVE_MANUFACTURER = 'SAVE_MANUFACTURER';
export const MANUFACTURER_SAVED = 'MANUFACTURER_SAVED';
export const DELETE_MANUFACTURER = 'DELETE_MANUFACTURER';
export const MANUFACTURER_DELETED = 'MANUFACTURER_DELETED';

export class LoadManufacturersAction implements Action {
  readonly type = LOAD_MANUFACTURERS;
}

export class ManufacturersLoadedAction implements Action {
  readonly type = MANUFACTURERS_LOADED;

  constructor( public readonly manufacturers: Manufacturer[] ){}
}

export class LoadManufacturerAction implements Action {
  readonly type = LOAD_MANUFACTURER;

  constructor( public readonly id?: string ){}
}

export class ManufacturerLoadedAction implements Action {
  readonly type = MANUFACTURER_LOADED;

  constructor( public readonly manufacturer?: Manufacturer ) {}
}

export class NewManufacturerAction implements Action {
  readonly type = NEW_MANUFACTURER;
}

export class SaveManufacturerAction implements Action {
  readonly type = SAVE_MANUFACTURER;

  constructor( public readonly manufacturer: Manufacturer ) {}
}

export class ManufacturerSavedAction implements Action {
  readonly type = MANUFACTURER_SAVED;

  constructor( public readonly savedManufacturer: Manufacturer ) {
  }
}

export class DeleteManufacturerAction implements Action {
  readonly type = DELETE_MANUFACTURER;

  constructor( public readonly manufacturer: Manufacturer ) {}
}

export class ManufacturerDeletedAction implements Action {
  readonly type = MANUFACTURER_DELETED;

  constructor( public readonly deletedManufacturerId: string ) {}
}

export type AdminAction
  = DeleteManufacturerAction
  | LoadManufacturersAction
  | LoadManufacturerAction
  | ManufacturerDeletedAction
  | ManufacturerSavedAction
  | ManufacturersLoadedAction
  | ManufacturerLoadedAction
  | NewManufacturerAction
  | SaveManufacturerAction;

