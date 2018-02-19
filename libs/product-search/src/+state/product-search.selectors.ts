import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '@price-depo-ui/product';

import { ProductSearch } from './product-search.interfaces';

function isLoading( state: ProductSearch ): boolean {
  return state.isLoading;
}

function searchExpression( state: ProductSearch ): string {
  return state.searchExpression;
}

function hasSearchExpression( searchExpr: string ): boolean {
  return !!searchExpr && typeof searchExpr === 'string' && searchExpr.trim().length > 0;
}

function searchResults( state: ProductSearch ): Product[] {
  return state.searchResults;
}

export const getProductSearchStateSelector = createFeatureSelector( 'productSearch' );
export const isLoadingSelector = createSelector( getProductSearchStateSelector, isLoading );
export const searchExpressionSelector = createSelector( getProductSearchStateSelector, searchExpression );
export const hasSearchExpressionSelector = createSelector( searchExpressionSelector, hasSearchExpression );
export const searchResultsSelector = createSelector( getProductSearchStateSelector, searchResults );
