import { AuthenticatedAction, AUTHENTICATED, SecurityAction } from "@price-depo-ui/security/src/+state/security.actions";
import { SecurityState } from "@price-depo-ui/security/src/+state/security.state";

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
