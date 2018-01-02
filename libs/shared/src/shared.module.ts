import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataHandlingModule } from "@price-depo-ui/data-handling";
import { ClickOutsideModule } from "ng-click-outside";
import { components } from "./components";

@NgModule( {
  imports: [
    CommonModule,
    ClickOutsideModule,
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
