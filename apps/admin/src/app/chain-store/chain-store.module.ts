import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { DataHandlingModule } from "../../../../../libs/data-handling";
import { SharedModule } from "../../../../../libs/shared";
import { chainStoreInitialState } from "./+state/chain-store.init";
import { chainStoreReducer } from "./+state/chain-store.reducer";
import { effects } from "./+state/effects";
import { components } from "./components";
import { ChainStoreDetailsPageComponent } from "./components/chain-store-details-page/details.component";
import { ChainStoreListPageComponent } from "./components/chain-store-list-page/list.component";

const routes: Routes = [
  {
    path: '',
    component: ChainStoreListPageComponent,
  },
  {
    path: 'new',
    component: ChainStoreDetailsPageComponent,
    data: {
      isNew: true
    }
  },
  {
    path: ':chainStoreId',
    component: ChainStoreDetailsPageComponent,
  },
];

@NgModule( {
  imports: [
    CommonModule,
    SharedModule,
    DataHandlingModule,

    RouterModule.forChild( routes ),
    StoreModule.forFeature( 'admin.chain-stores', chainStoreReducer, { initialState: chainStoreInitialState } ),
    EffectsModule.forFeature( effects )

  ],
  declarations: [
    ...components
  ],
  providers: [
    ...effects
  ]
} )
export class ChainStoreModule {
}
