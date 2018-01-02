import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { NxModule } from '@nrwl/nx';
import { SecurityModule } from "@price-depo-ui/security";
import { environment } from "../environments/environment";
import { AppEffects } from './+state/app.effects';
import { appInitialState } from './+state/app.init';
import { appReducer } from './+state/app.reducer';
import { Components } from "./components";
import { AppComponent } from './components/app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full'
  },
  {
    path: 'profile',
    loadChildren: '@price-depo-ui/profile#ProfileModule'
  }, {
    path: 'product',
    loadChildren: '@price-depo-ui/product#ProductModule'
  }
];

@NgModule( {
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot( routes, { initialNavigation: 'enabled' } ),
    StoreModule.forRoot( appReducer, { initialState: appInitialState } ),
    EffectsModule.forRoot( [ AppEffects ] ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    SecurityModule
  ],
  declarations: [ ...Components ],
  bootstrap: [ AppComponent ],
  providers: [ AppEffects ],
} )
export class AppModule {
}
