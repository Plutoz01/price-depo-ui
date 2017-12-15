import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { components } from "@price-depo-ui/product/src/admin/components";
import { SharedModule } from "@price-depo-ui/shared";

@NgModule( {
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ...components
  ],
  exports: [

  ]
} )
export class AdminModule {
}
