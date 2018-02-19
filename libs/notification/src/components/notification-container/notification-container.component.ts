import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getNotificationsListSelector } from '../../+state/notification.selectors';
import { NotificationsState } from '../../+state/notification.state';
import { Notification } from '../../models/notification.class';

@Component( {
  selector: 'pd-notification-container',
  templateUrl: './notification-container.component.html',
  styleUrls: [ './notification-container.component.scss' ],
  animations: [
    trigger( 'rollInOut', [
      transition( ':enter', [ style( { transform: 'translateX(100%)' } ), animate( 200 ) ] ),
      transition( ':leave', [ animate( 200, style( { transform: 'translateX(100%)' } ) ) ] )
    ] )
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class NotificationContainerComponent {
  readonly items$: Store<Notification[]> = this.store.select( getNotificationsListSelector );

  constructor( private store: Store<NotificationsState> ) {
  }
}
