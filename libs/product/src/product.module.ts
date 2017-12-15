import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminModule } from "@price-depo-ui/product/src/admin/admin.module";
import { SecurityModule } from "@price-depo-ui/security";
import { AuthenticatedGuard } from "@price-depo-ui/security/src/guards/authenticated.guard";
import { HasAllPermissionsGuard } from "@price-depo-ui/security/src/guards/has-all-permissions.guard";
import { AdminPageComponent } from './admin/components/admin-page/admin-page.component';

@NgModule( {
  imports: [
    CommonModule,
    SecurityModule,
    AdminModule,

    RouterModule.forChild( [
      {
        path: 'admin', component: AdminPageComponent,
        canActivate: [ AuthenticatedGuard, HasAllPermissionsGuard ],
        data: { permissions: [ 'product.admin' ] }
      }
    ] ) ]
} )
export class ProductModule {
}
