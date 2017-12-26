import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';
import { ErrorHandlingModule } from "@price-depo-ui/error-handling/src/error-handling.module";
import { NotificationsModule } from "@price-depo-ui/notifications";
import { ProductModule } from "@price-depo-ui/product";
import { SecurityModule } from "@price-depo-ui/security";
import { SharedModule } from "@price-depo-ui/shared";
import { environment } from '../environments/environment';
import { appInitialState } from './+state/admin.init';
import { adminReducer } from "./+state/admin.reducer";
import { components } from "./components";
import { AdminPageComponent } from "./components/admin-page/admin-page.component";
import { AppComponent } from "./components/app.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AdminPageComponent
  },
  {
    path: 'manufacturers',
    loadChildren: './manufacturers/manufacturers.module#ManufacturersModule'
  },
  {
    path: 'chain-stores',
    loadChildren: './chain-store/chain-store.module#ChainStoreModule'
  }
];

@NgModule( {
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SecurityModule,
    ProductModule,
    SharedModule,
    NotificationsModule,
    ErrorHandlingModule,

    NxModule.forRoot(),
    RouterModule.forRoot( routes, { initialNavigation: 'enabled' } ),
    StoreModule.forRoot( { app: adminReducer }, { initialState: appInitialState } ),
    EffectsModule.forRoot( [] ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
  ],
  declarations: [
    ...components
  ],
  bootstrap: [ AppComponent ],
  providers: []
} )
export class AdminAppModule {
}
