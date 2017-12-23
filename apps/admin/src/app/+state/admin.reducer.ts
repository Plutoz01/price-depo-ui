import { adminInitialState } from "./admin.init";
import { AdminState } from './admin.interfaces';
import { AdminAction, MANUFACTURERS_LOADED, ManufacturersLoadedAction } from './admin.actions';

export function adminReducer( state: AdminState = adminInitialState, action: AdminAction ): AdminState {
  switch ( action.type ) {
    case MANUFACTURERS_LOADED: {
      return handleManufacturersLoaded( state, action );
    }
    default: {
      return state;
    }
  }
}

function handleManufacturersLoaded( state: AdminState, action: ManufacturersLoadedAction ): AdminState {
  return {
    ...state,
    manufacturers: action.manufacturers,
    selectedManufacturer: null
  };
}
