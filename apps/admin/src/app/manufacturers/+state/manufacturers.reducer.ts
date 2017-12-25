import {
  handleMasterDetailsLoadAllSuccess, handleMasterDetailsLoadByIdSuccess
} from "@price-depo-ui/data-handling/src/+state/master-details.handlers";
import { ManufacturerActions, ManufacturerActionType } from "./manufacturers.actions";
import { ManufacturersState } from "./manufacturers.state";

export function manufacturersReducer( state: ManufacturersState, action: ManufacturerActions ): ManufacturersState {
  switch ( action.type ) {
    case ManufacturerActionType.loadAllSuccess: {
      return handleMasterDetailsLoadAllSuccess( state, action );
    }
    case ManufacturerActionType.loadByIdSuccess: {
      return handleMasterDetailsLoadByIdSuccess( state, action );
    }
    case ManufacturerActionType.createNew: {
      return handleNewManufacturer( state );
    }
    default: {
      return state;
    }
  }
}

function handleNewManufacturer( state: ManufacturersState ): ManufacturersState {
  return {
    ...state,
    selected: { name: '', country: '' }
  };
}
