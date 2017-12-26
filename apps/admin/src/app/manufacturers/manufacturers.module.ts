import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DataHandlingModule } from "@price-depo-ui/data-handling";
import { SharedModule } from "@price-depo-ui/shared";
import { effects } from "./+state/effects";
import { manufacturersInitialState } from './+state/manufacturers.init';
import { manufacturersReducer } from './+state/manufacturers.reducer';
import { components } from "./components";
import { ManufacturerDetailsPageComponent } from "./components/manufacturer-details-page/details.component";
import { ManufacturerListPageComponent } from "./components/manufacturer-list-page/list.component";

const routes: Routes = [
  {
    path: '',
    component: ManufacturerListPageComponent,
  },
  {
    path: 'new',
    component: ManufacturerDetailsPageComponent,
    data: {
      isNew: true
    }
  },
  {
    path: ':manufacturerId',
    component: ManufacturerDetailsPageComponent,
  },
];

@NgModule( {
  imports: [
    CommonModule,
    SharedModule,
    DataHandlingModule,

    RouterModule.forChild( routes ),
    StoreModule.forFeature( 'admin_manufacturers', manufacturersReducer, { initialState: manufacturersInitialState } ),
    EffectsModule.forFeature( effects )
  ],
  declarations: [
    ...components
  ],
  providers: [ ...effects ]
} )
export class ManufacturersModule {
}
