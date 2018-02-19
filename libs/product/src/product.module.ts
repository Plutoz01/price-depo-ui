import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DataHandlingModule } from '@price-depo-ui/data-handling';
import { SecurityModule } from '@price-depo-ui/security';
import { repositories } from './services/repositories/index';

@NgModule( {
  imports: [ CommonModule, HttpClientModule, SecurityModule, DataHandlingModule ],
  providers: [ ...repositories ]
} )
export class ProductModule {
}
