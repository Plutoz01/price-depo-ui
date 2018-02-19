import { Action } from '@ngrx/store';
import { Identifiable, Pageable, PagedResponse } from '@price-depo-ui/data-handling';
import { DynamicFormDef } from '@price-depo-ui/dynamic-form';

import { AdminDataType } from '../models/admin-data-type.enum';

export enum AdminActionType {
  loadAll = 'ADMIN_LOAD_ALL',
  loadAllSuccess = 'ADMIN_LOAD_ALL_SUCCESS',
  loadById = 'ADMIN_LOAD_BY_ID',
  loadByIdSuccess = 'ADMIN_LOAD_BY_ID_SUCCESS',
  createNew = 'ADMIN_CREATE_NEW',
  save = 'ADMIN_SAVE',
  saveSuccess = 'ADMIN_SAVE_SUCCESS',
  delete = 'ADMIN_DELETE',
  deleteSuccess = 'ADMIN_DELETE_SUCCESS',
  loadDynamicFormDef = 'ADMIN_LOAD_DYNAMIC_FORM_DEF',
  loadDynamicFormDefSuccess = 'ADMIN_LOAD_DYNAMIC_FORM_DEF_SUCCESS'
}

export class LoadAllAction implements Action {
  readonly type = AdminActionType.loadAll;

  constructor( public readonly dataType: AdminDataType, public readonly pageable: Pageable ) {
  }
}

export class LoadAllSuccessAction implements Action {
  readonly type = AdminActionType.loadAllSuccess;

  constructor( public readonly dataType: AdminDataType,
               public readonly pagedResponse: PagedResponse<Identifiable<any>> ) {
  }
}

export class LoadByIdAction implements Action {
  readonly type = AdminActionType.loadById;

  constructor( public readonly dataType: AdminDataType, public readonly id: any ) {
  }
}

export class LoadByIdSuccessAction implements Action {
  readonly type = AdminActionType.loadByIdSuccess;

  constructor( public readonly dataType: AdminDataType, public readonly loadedItem: Identifiable<any> ) {
  }
}

export class CreateNewAction implements Action {
  readonly type = AdminActionType.createNew;

  constructor( public readonly dataType: AdminDataType, public readonly initialValue: Identifiable<any> ) {
  }
}

export class SaveAction implements Action {
  readonly type = AdminActionType.save;

  constructor( public readonly dataType: AdminDataType, public readonly savable: Identifiable<any> ) {
  }
}

export class SaveSuccessAction implements Action {
  readonly type = AdminActionType.saveSuccess;

  constructor( public readonly dataType: AdminDataType, public readonly saved: Identifiable<any> ) {
  }
}

export class DeleteAction implements Action {
  readonly type = AdminActionType.delete;

  constructor( public readonly dataType: AdminDataType, public readonly deletable: Identifiable<any> ) {
  }
}

export class DeleteSuccessAction implements Action {
  readonly type = AdminActionType.deleteSuccess;

  constructor( public readonly dataType: AdminDataType, public readonly deletedId: any ) {
  }
}

export class LoadDynamicFormDefAction implements Action {
  readonly type = AdminActionType.loadDynamicFormDef;

  constructor( public readonly formDefId: string ) {
  }
}

export class LoadDynamicFormDefSuccessAction implements Action {
  readonly type = AdminActionType.loadDynamicFormDefSuccess;

  constructor( public readonly formDef: DynamicFormDef ) {
  }
}

export type AdminActions =
  | LoadAllAction
  | LoadAllSuccessAction
  | LoadByIdAction
  | LoadByIdSuccessAction
  | CreateNewAction
  | SaveAction
  | SaveSuccessAction
  | DeleteAction
  | DeleteSuccessAction
  | LoadDynamicFormDefAction
  | LoadDynamicFormDefSuccessAction;
