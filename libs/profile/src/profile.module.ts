import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

@NgModule( {
  imports: [
    CommonModule,
    RouterModule.forChild( [
      { path: '', pathMatch: 'full', component: ProfilePageComponent }
    ] )
  ],
  declarations: [ ProfilePageComponent ],
} )
export class ProfileModule {
}
