import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SecurityModule, AuthenticatedGuard, HasAllPermissionsGuard } from '@price-depo-ui/security';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

@NgModule( {
  imports: [
    CommonModule,
    SecurityModule,
    RouterModule.forChild( [
      {
        path: '', pathMatch: 'full', component: ProfilePageComponent,
        canActivate: [ AuthenticatedGuard, HasAllPermissionsGuard ],
        data: { permissions: [ 'profile' ] }
      }
    ] )
  ],
  declarations: [ ProfilePageComponent ],
} )
export class ProfileModule {
}
