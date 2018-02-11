import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DataHandlingModule } from '@price-depo-ui/data-handling';
import { SharedModule } from '@price-depo-ui/shared';

import { components } from './components';
import { DynamicFormFactory } from './services/DynamicFormFactory.service';

@NgModule( {
  imports: [
    CommonModule,
    DataHandlingModule,
    SharedModule,
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
