import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from '@ngrx/store';
import { NotificationsEffects } from "@price-depo-ui/notifications/src/+state/notifications.effects";
import { notificationsInitState } from "./+state/notifications.init";
import { notificationsReducer } from "./+state/notifications.reducer";
import { components } from "./components";

@NgModule( {
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    StoreModule.forFeature( 'notifications', notificationsReducer, { initialState: notificationsInitState } ),
    EffectsModule.forFeature( [ NotificationsEffects ] )
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ],
  providers: [
    NotificationsEffects
  ]
} )
export class NotificationsModule {
}
