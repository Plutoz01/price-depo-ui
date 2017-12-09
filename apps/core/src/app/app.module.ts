import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { Components } from "./components";
import { AppComponent } from './components/app.component';

@NgModule( {
  imports: [
    BrowserModule,
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
  ],
  declarations: [ ...Components ],
  bootstrap: [ AppComponent ],
} )
export class AppModule {
}
