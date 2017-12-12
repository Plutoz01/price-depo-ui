import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticatedGuard } from "@price-depo-ui/security/src/guards/authenticated.guard";
import { HasAllPermissionsGuard } from "@price-depo-ui/security/src/guards/has-all-permissions.guard";
import { ProfilePageComponent } from './components/profile-page/profile-page.component';

@NgModule( {
  imports: [
    CommonModule,
    RouterModule.forChild( [
      {
        path: '', pathMatch: 'full', component: ProfilePageComponent,
        canActivate: [ AuthenticatedGuard, HasAllPermissionsGuard ],
        data: { [ HasAllPermissionsGuard.permissionsKey ]: [ 'profile' ] }
      }
    ] )
  ],
  declarations: [ ProfilePageComponent ],
} )
export class ProfileModule {
}
