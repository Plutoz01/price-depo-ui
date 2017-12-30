import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/nx';
import { DynamicFormModule } from "@price-depo-ui/dynamic-form/src/dynamic-form.module";
import { ErrorHandlingModule } from "@price-depo-ui/error-handling/src/error-handling.module";
import { NotificationsModule } from "@price-depo-ui/notifications";
import { ProductModule } from "@price-depo-ui/product";
import { SecurityModule } from "@price-depo-ui/security";
import { SharedModule } from "@price-depo-ui/shared";
import { environment } from '../environments/environment';
import { appInitialState } from './+state/admin.init';
import { adminReducer } from "./+state/admin.reducer";
import { effects } from "./+state/effects";
import { routes } from "./routes/admin.routes";
import { components } from "./components";
import { AppComponent } from "./components/app.component";

@NgModule( {
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SecurityModule,
    ProductModule,
    SharedModule,
    NotificationsModule,
    ErrorHandlingModule,
    DynamicFormModule,

    NxModule.forRoot(),
    RouterModule.forRoot( routes, { initialNavigation: 'enabled' } ),
    StoreModule.forRoot( { app: adminReducer }, { initialState: appInitialState } ),
    EffectsModule.forRoot( effects ),
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
