import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { ErrorHandlingActionType, ErrorThrownAction } from "./error-handling.actions";
import { NotificationCreateAction } from "@price-depo-ui/notifications/src/+state/notifications.actions";
import { Notification, NotificationLevel } from "@price-depo-ui/notifications/src/models/notification.class";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

@Injectable()
export class ErrorHandlingEffects {
  static readonly errorMessageAutoHideAfterSeconds = 15;

  @Effect()
  readonly notificationOnError: Observable<NotificationCreateAction> =
    this.actions$.ofType<ErrorThrownAction>( ErrorHandlingActionType.errorThrown ).pipe(
      map( ( action: ErrorThrownAction ) => {
        const notification = new Notification(
          NotificationLevel.error,
          action.title,
          action.description,
          true,
          ErrorHandlingEffects.errorMessageAutoHideAfterSeconds );
        return new NotificationCreateAction( notification );
      } )
    );

  static handleActionError( action: Action, error: Error ): ErrorThrownAction {
    console.error( `Action failed: ${ action.type }. Error: `, error );

    let title = 'Unexpected error';

    if ( error instanceof HttpErrorResponse ) {
      title = 'Network error';
    }
    return new ErrorThrownAction( title );
  }

  constructor( private actions$: Actions ) {
  }
}
