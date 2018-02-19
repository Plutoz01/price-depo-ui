import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '@price-depo-ui/product';
import { Observable } from 'rxjs/Observable';

import { ProductSearchAction } from '../../+state/product-search.actions';
import { ProductSearchState } from '../../+state/product-search.interfaces';
import { hasSearchExpressionSelector, isLoadingSelector, searchResultsSelector } from '../../+state/product-search.selectors';

@Component( {
  selector: 'pd-product-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: [ './search-container.component.scss' ]
} )
export class SearchContainerComponent {
  isLoading$: Observable<boolean> = this.store.select( isLoadingSelector );
  searchResults$: Observable<Product[]> = this.store.select( searchResultsSelector );
  hasSearchExpression$: Observable<boolean> = this.store.select( hasSearchExpressionSelector );

  constructor( private store: Store<ProductSearchState> ) {
  }

  onSearch( searchExpr: string ) {
    this.store.dispatch( new ProductSearchAction( searchExpr ) );
  }
}
