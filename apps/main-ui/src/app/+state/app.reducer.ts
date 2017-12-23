import {MainUiState} from './app.interfaces';
import { MainUiAction, DATA_LOADED } from './app.actions';

export function appReducer( state: MainUiState, action: MainUiAction): MainUiState {
  switch (action.type) {
    case DATA_LOADED: {
      return {...state, ...action.payload};
    }
    default: {
      return state;
    }
  }
}
