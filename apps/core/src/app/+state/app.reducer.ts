import {CoreState} from './app.interfaces';
import { CoreAction, DATA_LOADED } from './app.actions';

export function appReducer( state: CoreState, action: CoreAction): CoreState {
  switch (action.type) {
    case DATA_LOADED: {
      return {...state, ...action.payload};
    }
    default: {
      return state;
    }
  }
}
