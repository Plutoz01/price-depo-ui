import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { components } from "@price-depo-ui/product/src/admin/components";
import { AdminPageComponent } from "@price-depo-ui/product/src/admin/components/admin-page/admin-page.component";
import { ManufacturerAdminComponent } from "@price-depo-ui/product/src/admin/components/manufacturer-admin/manufacturer-admin.component";
import { SecurityModule } from "@price-depo-ui/security";
import { AuthenticatedGuard } from "@price-depo-ui/security/src/guards/authenticated.guard";
import { HasAllPermissionsGuard } from "@price-depo-ui/security/src/guards/has-all-permissions.guard";
import { SharedModule } from "@price-depo-ui/shared";

@NgModule( {
  imports: [
    CommonModule,
    SecurityModule,
    SharedModule,

    RouterModule.forChild( [
      { path: '', pathMatch: 'full', component: AdminPageComponent },
      {
        path: 'manufacturer', component: ManufacturerAdminComponent,
        canActivate: [ AuthenticatedGuard, HasAllPermissionsGuard ],
        data: { permissions: [ 'product.admin.manufacturer' ] }
      }
    ] ),
  ],
  declarations: [
    ...components
  ],
  exports: [
    HttpClientModule,
    SharedModule
  ]
} )
export class ProductAdminModule {
}
