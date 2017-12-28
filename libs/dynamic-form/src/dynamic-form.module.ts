import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { DynamicFormFactory } from "@price-depo-ui/dynamic-form/src/services/DynamicFormFactory.service";
import { components } from "./components";

@NgModule( {
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    ...components
  ],
  providers: [
    DynamicFormFactory
  ],
  exports: [
    ...components
  ]
} )
export class DynamicFormModule {
}
