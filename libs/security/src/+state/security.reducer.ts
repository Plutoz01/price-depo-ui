import { AUTHENTICATED, AuthenticatedAction, SecurityAction } from './security.actions';
import { SecurityState } from './security.state';

export function securityReducer( state: SecurityState, action: SecurityAction ): SecurityState {
  switch ( action.type ) {
    case AUTHENTICATED: {
      return handleUserAuthenticated( state, action );
    }
    default: {
      return state;
    }
  }
}

function handleUserAuthenticated( state: SecurityState, action: AuthenticatedAction ): SecurityState {
  return {
    ...state,
    user: action.user
  };
}
