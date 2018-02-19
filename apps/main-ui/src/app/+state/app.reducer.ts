import { DATA_LOADED, MainUiAction } from './app.actions';
import { MainUiState } from './app.interfaces';

export function appReducer( state: MainUiState, action: MainUiAction ): MainUiState {
  switch ( action.type ) {
    case DATA_LOADED: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
