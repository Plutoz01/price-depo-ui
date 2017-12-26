import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import {
  NotificationCloseAction, NotificationCreateAction,
  NotificationsActionType
} from "@price-depo-ui/notifications/src/+state/notifications.actions";
import { Observable } from "rxjs/Observable";
import { map, filter, mergeMap } from "rxjs/operators";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class NotificationsEffects {

  @Effect()
  readonly delayedClose$: Observable<NotificationCloseAction>;

  constructor( actions$: Actions ) {
    this.delayedClose$ = actions$.ofType<NotificationCreateAction>( NotificationsActionType.create ).pipe(
      filter( action => {
        const hideAfterSeconds = action.newNotification.hideAfterSeconds;
        return !!hideAfterSeconds && hideAfterSeconds > 0;
      } ),
      mergeMap( action => {
        return Observable.of( action.newNotification.id ).delay( 1000 * action.newNotification.hideAfterSeconds );
      } ),
      map( notificationId => new NotificationCloseAction( notificationId ) )
    );
  }

}
