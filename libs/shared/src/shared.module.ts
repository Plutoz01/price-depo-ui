import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { components } from "@price-depo-ui/shared/src/components";

@NgModule( {
  imports: [
    CommonModule,
    ReactiveFormsModule
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
