import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataHandlingModule } from "@price-depo-ui/data-handling";
import { SharedModule } from "@price-depo-ui/shared";
import { effects } from "./+state/effects";
import { manufacturersReducer } from './+state/manufacturers.reducer';
import { manufacturersInitialState } from './+state/manufacturers.init';
import { ManufacturerDetailsPageComponent } from "./components/manufacturer-details/manufacturer-details.component";
import { ManufacturerListPageComponent } from "./components/manufacturer-list/list.component";

const routes: Routes = [
  {
    path: 'manufacturers',
    component: ManufacturerListPageComponent,
  },
  {
    path: 'manufacturers/new',
    component: ManufacturerDetailsPageComponent,
    data: {
      isNew: true
    }
  },
  {
    path: 'manufacturers/:manufacturerId',
    component: ManufacturerDetailsPageComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DataHandlingModule,

    RouterModule.forChild( routes ),
    StoreModule.forFeature('admin.manufacturers', manufacturersReducer, {initialState: manufacturersInitialState }),
    EffectsModule.forFeature( effects )
  ],
  declarations: [
    ManufacturerListPageComponent,
    ManufacturerDetailsPageComponent
  ],
  providers: [ ...effects ]
})
export class ManufacturersModule { }
