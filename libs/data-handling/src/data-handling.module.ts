import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ErrorHandlingModule } from "@price-depo-ui/error-handling/src/error-handling.module";

@NgModule( {
  imports: [
    HttpClientModule,
    ErrorHandlingModule
  ]
} )
export class DataHandlingModule {
}
