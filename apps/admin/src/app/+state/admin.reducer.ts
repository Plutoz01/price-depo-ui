import { Action } from "@ngrx/store";
import { adminInitialState } from "./admin.init";
import { AdminState } from './admin.interfaces';

export function adminReducer( state: AdminState = adminInitialState, action: Action ): AdminState {
  switch ( action.type ) {

    default: {
      return state;
    }
  }
}
