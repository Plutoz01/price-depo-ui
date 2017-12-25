import { Action } from "@ngrx/store";
import {
  DeleteAction, DeleteSuccessAction, LoadByIdAction, LoadByIdSuccessAction, LoadAllSuccessAction, SaveAction,
  SaveSuccessAction
} from "../../../../../../libs/data-handling/src/+state/crud-state-base.actions";
import { ChainStore } from "../../../../../../libs/product/src/models/chain-store.interface";

export enum ChainStoreActionType {
  loadAll = 'CHAIN_STORE_LOAD_ALL',
  loadAllSuccess = 'CHAIN_STORE_LOAD_ALL_SUCCESS',
  loadById = 'CHAIN_STORE_LOAD_BY_ID',
  loadByIdSuccess = 'CHAIN_STORE_LOAD_BY_ID_SUCCESS',
  createNew = 'CHAIN_STORE_CREATE_NEW',
  save = 'CHAIN_STORE_SAVE',
  saveSuccess = 'CHAIN_STORE_SAVE_SUCCESS',
  delete = 'CHAIN_STORE_DELETE',
  deleteSuccess = 'CHAIN_STORE_DELETE_SUCCESS'
}

export class LoadAllChainStoreAction implements Action {
  readonly type = ChainStoreActionType.loadAll;
}

export class LoadAllChainStoreSuccessAction extends LoadAllSuccessAction<ChainStore> {
  readonly type = ChainStoreActionType.loadAllSuccess;
}

export class LoadChainStoreAction extends LoadByIdAction<string> {
  readonly type = ChainStoreActionType.loadById;
}

export class LoadChainStoreSuccessAction extends LoadByIdSuccessAction<ChainStore> {
  readonly type = ChainStoreActionType.loadByIdSuccess;
}

export class NewChainStoreAction implements Action {
  readonly type = ChainStoreActionType.createNew;
}

export class SaveChainStoreAction extends SaveAction<ChainStore> {
  readonly type = ChainStoreActionType.save;
}

export class SaveChainStoreSuccessAction extends SaveSuccessAction<ChainStore> {
  readonly type = ChainStoreActionType.saveSuccess;
}

export class DeleteChainStoreAction extends DeleteAction<ChainStore> {
  readonly type = ChainStoreActionType.delete;
}

export class DeleteChainStoreSuccessAction extends DeleteSuccessAction<string> {
  readonly type = ChainStoreActionType.deleteSuccess;
}

export type ChainStoreActions
  = LoadAllChainStoreAction
  | LoadAllChainStoreSuccessAction
  | LoadChainStoreAction
  | LoadChainStoreSuccessAction
  | NewChainStoreAction
  | SaveChainStoreAction
  | SaveChainStoreSuccessAction
  | DeleteChainStoreAction
  | DeleteChainStoreSuccessAction;

