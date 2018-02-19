import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotificationCloseAction } from '../../+state/notification.actions';
import { NotificationsState } from '../../+state/notification.state';
import { Notification, NotificationLevel } from '../../models/notification.class';

@Component( {
  selector: 'pd-notification-item',
  templateUrl: './notification-item.component.html',
  styleUrls: [ './notification-item.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class NotificationItemComponent {
  @Input() notification: Notification;

  constructor( private store: Store<NotificationsState> ) {
  }

  get levelClass(): string {
    switch ( this.notification.level ) {
      case NotificationLevel.info:
        return 'alert-info';
      case NotificationLevel.success:
        return 'alert-success';
      case NotificationLevel.warning:
        return 'alert-warning';
      case NotificationLevel.error:
        return 'alert-danger';
      default:
        return 'alert-secondary';
    }
  }

  onClose() {
    this.store.dispatch( new NotificationCloseAction( this.notification.id ) );
  }
}
