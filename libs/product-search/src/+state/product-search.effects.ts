import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { FilterBase, FilterMatchType } from '@price-depo-ui/data-handling';
import { ErrorHandlingEffects, ErrorThrownAction } from '@price-depo-ui/error-handling';
import { Product, ProductFilterKeys, ProductHttpRepository } from '@price-depo-ui/product';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';

import {
  ProductSearchAction,
  ProductSearchActionType,
  ProductSearchFailedAction,
  ProductSearchSuccessAction
} from './product-search.actions';
import { ProductSearchState } from './product-search.interfaces';

@Injectable()
export class ProductSearchEffects {
  @Effect()
  readonly searchProduct$: Observable<ProductSearchSuccessAction | ProductSearchFailedAction> = this.buildSearchProductEffect();

  constructor( private dataPersistence: DataPersistence<ProductSearchState>,
               private productRepository: ProductHttpRepository ) {
  }

  static handleFetchError( action: ProductSearchAction,
                           error: Error ): Observable<ProductSearchFailedAction | ErrorThrownAction> {
    return Observable.from( [ new ProductSearchFailedAction(), ErrorHandlingEffects.handleActionError( action, error ) ] );
  }

  buildSearchProductEffect(): Observable<ProductSearchSuccessAction | ProductSearchFailedAction> {
    return this.dataPersistence.fetch( ProductSearchActionType.search, {
      run: ( searchAction: ProductSearchAction ) => this.fetchSearchResults( searchAction ),
      onError: ProductSearchEffects.handleFetchError
    } );
  }

  fetchSearchResults( searchAction: ProductSearchAction ): Observable<ProductSearchSuccessAction> {
    if ( searchAction.searchExpression.trim().length < 1 ) {
      return Observable.of( new ProductSearchSuccessAction( [] ) );
    }

    const filter: FilterBase<ProductFilterKeys> = {
      name: {
        value: searchAction.searchExpression,
        matchType: FilterMatchType.contains
      }
      // TODO: combined search in multiple properties: product name, manufacturer name, barcode
      // barcode: {
      //   value: searchAction.searchExpression,
      //   matchType: FilterMatchType.equals
      // }
    };
    // TODO: make filtering paginatable
    return this.productRepository.filterBy( filter ).map( ( results: Product[] ) => new ProductSearchSuccessAction( results ) );
  }
}
