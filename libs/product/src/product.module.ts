import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataHandlingModule } from "@price-depo-ui/data-handling";
import { repositories } from "@price-depo-ui/product/src/services/repositories/index";
import { SecurityModule } from "@price-depo-ui/security";

@NgModule( {
  imports: [
    CommonModule,
    HttpClientModule,
    SecurityModule,
    DataHandlingModule,
  ],
  providers: [
    ...repositories
  ]
} )
export class ProductModule {
}
