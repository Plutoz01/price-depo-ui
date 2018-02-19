import { Action } from '@ngrx/store';
import { Product } from '@price-depo-ui/product';

export enum ProductSearchActionType {
  search = 'PRODUCT_SEARCH',
  searchSuccess = 'PRODUCT_SEARCH_SUCCESS',
  searchFailed = 'PRODUCT_SEARCH_FAILED'
}

export class ProductSearchAction implements Action {
  readonly type = ProductSearchActionType.search;

  constructor( public readonly searchExpression: string ) {
  }
}

export class ProductSearchSuccessAction implements Action {
  readonly type = ProductSearchActionType.searchSuccess;

  constructor( public readonly results: Product[] ) {
  }
}

export class ProductSearchFailedAction implements Action {
  readonly type = ProductSearchActionType.searchFailed;
}

export type ProductSearchActions = ProductSearchAction | ProductSearchSuccessAction | ProductSearchFailedAction;
