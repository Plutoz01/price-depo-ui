import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
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

@NgModule( {
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    NxModule.forRoot(),
    RouterModule.forRoot( [
        {
          path: '',
          redirectTo: '/profile',
          pathMatch: 'full'
        },
        {
          path: 'profile',
          loadChildren: '@price-depo-ui/profile#ProfileModule'
        },
      ],
      { initialNavigation: 'enabled' } ),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],

    StoreModule.forFeature( 'core', appReducer, { initialState: appInitialState } ),
    EffectsModule.forFeature( [ AppEffects ] ),

    SecurityModule
  ],
  declarations: [ ...Components ],
  bootstrap: [ AppComponent ],
  providers: [ AppEffects ],
} )
export class AppModule {
}
