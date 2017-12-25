import { Action } from "@ngrx/store";
import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";
import {
  DeleteAction, DeleteSuccessAction, LoadAllSuccessAction, LoadByIdAction, LoadByIdSuccessAction, SaveAction, SaveSuccessAction
} from "../../../../../../libs/data-handling/src/+state/crud-state-base.actions";

export enum ManufacturerActionType {
  loadAll = 'MANUFACTURER_LOAD_ALL',
  loadAllSuccess = 'MANUFACTURER_LOAD_ALL_SUCCESS',
  loadById = 'MANUFACTURER_LOAD_BY_ID',
  loadByIdSuccess = 'MANUFACTURER_LOAD_BY_ID_SUCCESS',
  createNew = 'MANUFACTURER_CREATE_NEW',
  save = 'MANUFACTURER_SAVE',
  saveSuccess = 'MANUFACTURER_SAVE_SUCCESS',
  delete = 'MANUFACTURER_DELETE',
  deleteSuccess = 'MANUFACTURER_DELETE_SUCCESS'
}

export class LoadAllManufacturerAction implements Action {
  readonly type = ManufacturerActionType.loadAll;
}

export class LoadAllManufacturerSuccessAction extends LoadAllSuccessAction<Manufacturer> {
  readonly type = ManufacturerActionType.loadAllSuccess;
}

export class LoadManufacturerAction extends LoadByIdAction<string> {
  readonly type = ManufacturerActionType.loadById;
}

export class LoadManufacturerSuccessAction extends LoadByIdSuccessAction<Manufacturer> {
  readonly type = ManufacturerActionType.loadByIdSuccess;
}

export class NewManufacturerAction implements Action {
  readonly type = ManufacturerActionType.createNew;
}

export class SaveManufacturerAction extends SaveAction<Manufacturer> {
  readonly type = ManufacturerActionType.save;
}

export class SaveManufacturerSuccessAction extends SaveSuccessAction<Manufacturer> {
  readonly type = ManufacturerActionType.saveSuccess;
}

export class DeleteManufacturerAction extends DeleteAction<Manufacturer> {
  readonly type = ManufacturerActionType.delete;
}

export class DeleteManufacturerSuccessAction extends DeleteSuccessAction<string> {
  readonly type = ManufacturerActionType.deleteSuccess;
}

export type ManufacturerActions
  = LoadAllManufacturerAction
  | LoadAllManufacturerSuccessAction
  | LoadManufacturerAction
  | LoadManufacturerSuccessAction
  | NewManufacturerAction
  | SaveManufacturerAction
  | SaveManufacturerSuccessAction
  | DeleteManufacturerAction
  | DeleteManufacturerSuccessAction;

