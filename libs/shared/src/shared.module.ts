import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataHandlingModule } from "@price-depo-ui/data-handling";
import { components } from "./components";

@NgModule( {
  imports: [
    CommonModule,
    DataHandlingModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
} )
export class SharedModule {
}
