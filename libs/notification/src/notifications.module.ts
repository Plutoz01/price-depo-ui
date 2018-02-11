import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from '@ngrx/store';
import { NotificationsEffects } from "./+state/notification.effects";
import { notificationsInitState } from "./+state/notification.init";
import { notificationsReducer } from "./+state/notification.reducer";
import { components } from "./components";

@NgModule( {
  imports: [
    CommonModule,
    StoreModule.forFeature( 'notification', notificationsReducer, { initialState: notificationsInitState } ),
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
