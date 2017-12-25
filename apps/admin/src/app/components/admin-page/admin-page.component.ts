import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { NotificationCreateAction } from "@price-depo-ui/notifications/src/+state/notifications.actions";
import { Notification, NotificationLevel } from "@price-depo-ui/notifications/src/models/notification.class";
import { AdminAppState } from "../../+state/admin.interfaces";

@Component( {
  templateUrl: './admin-page.component.html',
  styleUrls: [ './admin-page.component.scss' ]
} )
export class AdminPageComponent {

  constructor( private store: Store<AdminAppState> ) {
  }

  createStaticNotification() {
    this.store.dispatch( new NotificationCreateAction(
      new Notification( NotificationLevel.error, "test error", "non-closable fade out after 3 seconds", false, 3000 ) ) );
    this.store.dispatch( new NotificationCreateAction(
      new Notification( NotificationLevel.warning, "test warning", "test description", true, 5000 ) ) );
    this.store.dispatch( new NotificationCreateAction(
      new Notification( NotificationLevel.success, "test success", "test description", true, 5000 ) ) );
    this.store.dispatch( new NotificationCreateAction(
      new Notification( NotificationLevel.info, "test info", "test description", true, 5000 ) ) );
    this.store.dispatch( new NotificationCreateAction(
      new Notification( NotificationLevel.info, "test without description", null, true, 5000 ) ) );




  }
}
