import {
  MANUFACTURER_LOADED, ManufacturerActions, ManufacturerLoadedAction, MANUFACTURERS_LOADED, ManufacturersLoadedAction,
  NEW_MANUFACTURER
} from "./manufacturers.actions";
import { ManufacturersState } from "./manufacturers.interfaces";

export function manufacturersReducer( state: ManufacturersState, action: ManufacturerActions ): ManufacturersState {
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

function handleManufacturersLoaded( state: ManufacturersState, action: ManufacturersLoadedAction ): ManufacturersState {
  return {
    ...state,
    items: action.loadedItems,
    selected: null
  };
}

function handleManufacturerLoaded( state: ManufacturersState, action: ManufacturerLoadedAction ): ManufacturersState {
  return {
    ...state,
    selected: action.loadedItem
  };
}

function handleNewManufacturer( state: ManufacturersState ): ManufacturersState {
  return {
    ...state,
    selected: { name: '', country: '' }
  };
}
