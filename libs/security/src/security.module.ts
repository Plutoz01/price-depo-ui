import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from "@ngrx/store";
import { securityInitState } from "@price-depo-ui/security/src/+state/security.init";
import { securityReducer } from "@price-depo-ui/security/src/+state/security.reducer";
import { directives } from "@price-depo-ui/security/src/directives";

@NgModule( {
  imports: [
    CommonModule,
    StoreModule.forFeature( 'security', securityReducer, { initialState: securityInitState } ),
  ],
  declarations: [
    ...directives,
  ],
  exports: [
    ...directives
  ]
} )
export class SecurityModule {
}
