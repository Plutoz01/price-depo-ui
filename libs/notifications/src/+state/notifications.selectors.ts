import { createFeatureSelector, createSelector } from "@ngrx/store";
import { NotificationsState } from "./notifications.state";
import { Notification } from "../models/notification.class";

function getNotifications( state: NotificationsState ): Notification[] {
  return state.notifications;
}

export const getNotificationsStateSelector = createFeatureSelector( 'notifications' );
export const getNotificationsListSelector = createSelector( getNotificationsStateSelector, getNotifications );
