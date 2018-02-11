import { NotificationCloseAction, NotificationCreateAction, NotificationsActions, NotificationsActionType } from "./notification.actions";
import { NotificationsState } from "./notification.state";

export function notificationsReducer( state: NotificationsState, action: NotificationsActions ): NotificationsState {
  switch ( action.type ) {
    case NotificationsActionType.create: {
      return handleNotificationCreate( state, action );
    }
    case NotificationsActionType.close: {
      return handleNotificationClose( state, action );
    }
    default: {
      return state;
    }
  }
}

function handleNotificationCreate( state: NotificationsState, action: NotificationCreateAction ): NotificationsState {
  return {
    ...state,
    notifications: [
      ...state.notifications,
      action.newNotification
    ]
  };
}

function handleNotificationClose( state: NotificationsState, action: NotificationCloseAction ): NotificationsState {
  return {
    ...state,
    notifications: state.notifications.filter( notification => notification.id !== action.notificationId )
  };
}
