import { handlePaginationChange, MasterDetailsState } from '@price-depo-ui/data-handling';
import { AdminDataType } from '../models/admin-data-type.enum';
import {
  AdminActions,
  AdminActionType,
  CreateNewAction,
  LoadAllSuccessAction,
  LoadByIdSuccessAction,
  LoadDynamicFormDefSuccessAction
} from './admin.actions';
import { adminInitialState } from './admin.init';
import { AdminState } from './admin.state';

export function adminReducer( state: AdminState = adminInitialState, action: AdminActions ): AdminState {
  switch ( action.type ) {
    case AdminActionType.loadAllSuccess:
      return handleLoadAllSuccess( state, action );
    case AdminActionType.loadByIdSuccess:
      return handleLoadByIdSuccess( state, action );
    case AdminActionType.createNew:
      return handleCreateNew( state, action );
    case AdminActionType.loadDynamicFormDefSuccess:
      return handleLoadDynamicFormDefSuccess( state, action );

    default: {
      return state;
    }
  }
}

function handleLoadAllSuccess( state: AdminState, action: LoadAllSuccessAction ): AdminState {
  const affectedMasterDetailsState: MasterDetailsState<any> = state[ action.dataType ];
  const newMasterDetailsState = {
    ...affectedMasterDetailsState,
    items: action.pagedResponse.content,
    pagination: handlePaginationChange( affectedMasterDetailsState.pagination, action.pagedResponse ),
    selected: null
  };

  return updateAppState( state, action.dataType, newMasterDetailsState );
}

function handleLoadByIdSuccess( state: AdminState, action: LoadByIdSuccessAction ): AdminState {
  const affectedMasterDetailsState: MasterDetailsState<any> = state[ action.dataType ];
  const newMasterDetailsState = {
    ...affectedMasterDetailsState,
    selected: action.loadedItem
  };

  return updateAppState( state, action.dataType, newMasterDetailsState );
}

function handleCreateNew( state: AdminState, action: CreateNewAction ): AdminState {
  const affectedMasterDetailsState: MasterDetailsState<any> = state[ action.dataType ];
  const newMasterDetailsState = {
    ...affectedMasterDetailsState,
    selected: action.initialValue
  };

  return updateAppState( state, action.dataType, newMasterDetailsState );
}

function updateAppState( state: AdminState, dataType: AdminDataType, modified: MasterDetailsState<any> ): AdminState {
  return {
    ...state,
    [ dataType ]: modified
  };
}

function handleLoadDynamicFormDefSuccess( state: AdminState, action: LoadDynamicFormDefSuccessAction ): AdminState {
  return {
    ...state,
    formDef: action.formDef
  };
}
