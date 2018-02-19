import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProductModule } from '@price-depo-ui/product';
import { ProductSearchEffects } from './+state/product-search.effects';

import { productSearchInitialState } from './+state/product-search.init';
import { productSearchReducer } from './+state/product-search.reducer';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { SearchResultItemComponent } from './components/search-result-item/search-result-item.component';
import { SearchResultListComponent } from './components/search-result-list/search-result-list.component';

@NgModule( {
  imports: [
    CommonModule,

    ProductModule,

    RouterModule.forChild( [ { path: '', pathMatch: 'full', component: SearchContainerComponent } ] ),
    StoreModule.forFeature( 'productSearch', productSearchReducer, { initialState: productSearchInitialState } ),
    EffectsModule.forFeature( [ ProductSearchEffects ] )
  ],
  declarations: [ SearchContainerComponent, SearchBoxComponent, SearchResultListComponent, SearchResultItemComponent ],
  providers: [ ProductSearchEffects ]
} )
export class ProductSearchModule {
}
