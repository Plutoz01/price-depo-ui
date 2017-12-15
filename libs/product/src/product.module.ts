import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataHandlingModule } from "@price-depo-ui/data-handling";
import { repositories } from "@price-depo-ui/product/src/common/repositories";
import { SecurityModule } from "@price-depo-ui/security";

@NgModule( {
  imports: [
    CommonModule,
    HttpClientModule,
    SecurityModule,
    DataHandlingModule,

    RouterModule.forChild( [
      {
        path: 'admin',
        loadChildren: '@price-depo-ui/product/src/admin#ProductAdminModule',
        // TODO: canActivate based on permission
      }
    ] ) ],
  providers: [
    ...repositories
  ]
} )
export class ProductModule {
}
