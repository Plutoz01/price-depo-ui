import { adminInitialState } from "./admin.init";
import { AdminState } from './admin.interfaces';
import {
  AdminAction, MANUFACTURER_LOADED, MANUFACTURERS_LOADED, ManufacturerLoadedAction,
  ManufacturersLoadedAction, NEW_MANUFACTURER
} from './admin.actions';

export function adminReducer( state: AdminState = adminInitialState, action: AdminAction ): AdminState {
  switch ( action.type ) {
    case MANUFACTURERS_LOADED: {
      return handleManufacturersLoaded( state, action );
    }
    case MANUFACTURER_LOADED: {
      return handleManufacturerLoaded( state, action );
    }
    case NEW_MANUFACTURER: {
      return handleNewManufacturer( state );
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

function handleManufacturerLoaded( state: AdminState, action: ManufacturerLoadedAction ): AdminState {
  return {
    ...state,
    selectedManufacturer: action.manufacturer
  };
}

function handleNewManufacturer( state: AdminState ): AdminState {
  return {
    ...state,
    selectedManufacturer: { name: '', country: '' }
  };
}
