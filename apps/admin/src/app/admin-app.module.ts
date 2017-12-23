import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';
import { ProductModule } from "@price-depo-ui/product";
import { SecurityModule } from "@price-depo-ui/security";
import { SharedModule } from "@price-depo-ui/shared";
import { environment } from '../environments/environment';
import { appInitialState } from './+state/admin.init';
import { adminReducer } from './+state/admin.reducer';
import { effects } from "./+state/effects";
import { components } from "./components";
import { AdminPageComponent } from "./components/admin-page/admin-page.component";
import { AppComponent } from "./components/app.component";
import { ManufacturerAdminComponent } from "./components/manufacturer-admin/manufacturer-admin.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AdminPageComponent
  },
  {
    path: 'manufacturers',
    component: ManufacturerAdminComponent
  }
];

@NgModule( {
  imports: [
    BrowserModule,
    SecurityModule,
    ProductModule,
    SharedModule,

    NxModule.forRoot(),
    RouterModule.forRoot( routes, { initialNavigation: 'enabled' } ),
    StoreModule.forRoot( { admin: adminReducer }, { initialState: appInitialState } ),
    EffectsModule.forRoot( [ ...effects ] ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
  ],
  declarations: [
    ...components
  ],
  bootstrap: [ AppComponent ],
  providers: [
    ...effects
  ]
} )
export class AdminAppModule {
}
