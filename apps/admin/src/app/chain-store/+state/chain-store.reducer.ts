import {
  handleMasterDetailsLoadAllSuccess, handleMasterDetailsLoadByIdSuccess
} from "@price-depo-ui/data-handling/src/+state/master-details.handlers";
import { ChainStoreActions, ChainStoreActionType } from "./chain-store.actions";
import { ChainStoreState } from "./chain-store.state";


export function chainStoreReducer( state: ChainStoreState, action: ChainStoreActions ): ChainStoreState {
  switch ( action.type ) {
    case ChainStoreActionType.loadAllSuccess: {
      return handleMasterDetailsLoadAllSuccess( state, action );
    }
    case ChainStoreActionType.loadByIdSuccess: {
      return handleMasterDetailsLoadByIdSuccess( state, action );
    }
    case ChainStoreActionType.createNew: {
      return handleNew( state );
    }
    default: {
      return state;
    }
  }
}

function handleNew( state: ChainStoreState ): ChainStoreState {
  return {
    ...state,
    selected: { name: '', website: '' }
  };
}
