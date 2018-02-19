import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Notification } from '../models/notification.class';
import { NotificationsState } from './notification.state';

function getNotifications( state: NotificationsState ): Notification[] {
  return state.notifications;
}

export const getNotificationsStateSelector = createFeatureSelector( 'notification' );
export const getNotificationsListSelector = createSelector( getNotificationsStateSelector, getNotifications );
