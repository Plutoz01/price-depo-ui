import { Action } from "@ngrx/store";
import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";
import {
  DeleteAction, DeleteSuccessAction, LoadByIdAction, LoadByIdSuccessAction, LoadAllSuccessAction, SaveAction,
  SaveSuccessAction
} from "../../../../../../libs/data-handling/src/models/crud-state-base.actions";

export const LOAD_ALL_MANUFACTURERS = 'LOAD_ALL_MANUFACTURERS';
export const MANUFACTURERS_LOADED = 'MANUFACTURERS_LOADED';
export const LOAD_MANUFACTURER = 'LOAD_MANUFACTURER';
export const MANUFACTURER_LOADED = 'MANUFACTURER_LOADED';
export const NEW_MANUFACTURER = 'NEW_MANUFACTURER';
export const SAVE_MANUFACTURER = 'SAVE_MANUFACTURER';
export const MANUFACTURER_SAVED = 'MANUFACTURER_SAVED';
export const DELETE_MANUFACTURER = 'DELETE_MANUFACTURER';
export const MANUFACTURER_DELETED = 'MANUFACTURER_DELETED';

export class LoadAllManufacturersAction implements Action {
  readonly type = LOAD_ALL_MANUFACTURERS;
}

export class ManufacturersLoadedAction extends LoadAllSuccessAction<Manufacturer> {
  readonly type = MANUFACTURERS_LOADED;
}

export class LoadManufacturerAction extends LoadByIdAction<string> {
  readonly type = LOAD_MANUFACTURER;
}

export class ManufacturerLoadedAction extends LoadByIdSuccessAction<Manufacturer> {
  readonly type = MANUFACTURER_LOADED;
}

export class NewManufacturerAction implements Action {
  readonly type = NEW_MANUFACTURER;
}

export class SaveManufacturerAction extends SaveAction<Manufacturer> {
  readonly type = SAVE_MANUFACTURER;
}

export class ManufacturerSavedAction extends SaveSuccessAction<Manufacturer> {
  readonly type = MANUFACTURER_SAVED;
}

export class DeleteManufacturerAction extends DeleteAction<Manufacturer> {
  readonly type = DELETE_MANUFACTURER;
}

export class ManufacturerDeletedAction extends DeleteSuccessAction<string> {
  readonly type = MANUFACTURER_DELETED;
}

export type ManufacturerActions
  = DeleteManufacturerAction
  | LoadManufacturerAction
  | LoadManufacturerAction
  | ManufacturerDeletedAction
  | ManufacturerSavedAction
  | ManufacturersLoadedAction
  | ManufacturerLoadedAction
  | NewManufacturerAction
  | SaveManufacturerAction;

