import { Action } from '@ngrx/store';
import { Notification } from '../models/notification.class';

export enum NotificationsActionType {
  create = 'NOTIFICATIONS_CREATE',
  close = 'NOTIFICATIONS_CLOSE'
}

export class NotificationCreateAction implements Action {
  readonly type = NotificationsActionType.create;

  constructor( public readonly newNotification: Notification ) {}
}

export class NotificationCloseAction implements Action {
  readonly type = NotificationsActionType.close;

  constructor( public readonly notificationId: string ) {}
}

export type NotificationsActions = NotificationCreateAction | NotificationCloseAction;
