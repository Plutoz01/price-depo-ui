import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { securityInitState } from "./+state/security.init";
import { securityReducer } from "./+state/security.reducer";
import { directives } from "./directives";
import { guards } from "./guards";

@NgModule( {
  imports: [
    CommonModule,
    StoreModule.forFeature( 'security', securityReducer, { initialState: securityInitState } ),
  ],
  declarations: [
    ...directives,
  ],
  providers: [
    ...guards
  ],
  exports: [
    ...directives
  ]
} )
export class SecurityModule {
}
