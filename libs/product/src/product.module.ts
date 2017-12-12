import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticatedGuard } from "@price-depo-ui/security/src/guards/authenticated.guard";
import { HasAllPermissionsGuard } from "@price-depo-ui/security/src/guards/has-all-permissions.guard";
import { AdminPageComponent } from './admin/components/admin-page/admin-page.component';

@NgModule( {
  imports: [ CommonModule,
    RouterModule.forChild( [
      {
        path: 'admin', component: AdminPageComponent,
        canActivate: [ AuthenticatedGuard, HasAllPermissionsGuard ],
        data: { [ HasAllPermissionsGuard.permissionsKey ]: [ 'product.admin' ] }
      }
    ] ) ],
  declarations: [ AdminPageComponent ]
} )
export class ProductModule {
}
