import { ProductSearchAction, ProductSearchActions, ProductSearchActionType, ProductSearchSuccessAction } from './product-search.actions';
import { ProductSearch } from './product-search.interfaces';

export function productSearchReducer( state: ProductSearch, action: ProductSearchActions ): ProductSearch {
  switch ( action.type ) {
    case ProductSearchActionType.search:
      return handleProductSearchAction( state, <ProductSearchAction>action );
    case ProductSearchActionType.searchSuccess:
      return handleProductSearchSuccessAction( state, <ProductSearchSuccessAction>action );
    case ProductSearchActionType.searchFailed:
      return handleProductSearchFailedAction( state );
    default: {
      return state;
    }
  }
}

function handleProductSearchAction( state: ProductSearch, action: ProductSearchAction ): ProductSearch {
  return {
    ...state,
    searchExpression: action.searchExpression,
    isLoading: true
  };
}

function handleProductSearchSuccessAction( state: ProductSearch, action: ProductSearchSuccessAction ): ProductSearch {
  return {
    ...state,
    searchResults: action.results,
    isLoading: false
  };
}

function handleProductSearchFailedAction( state: ProductSearch ): ProductSearch {
  return {
    ...state,
    searchResults: [],
    isLoading: false
  };
}
