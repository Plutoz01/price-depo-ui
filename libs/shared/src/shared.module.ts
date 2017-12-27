import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { DataHandlingModule } from "@price-depo-ui/data-handling";
import { components } from "./components";

@NgModule( {
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
