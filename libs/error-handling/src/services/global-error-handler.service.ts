import { ErrorHandler, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor( private store: Store<any> ){}

  handleError( error: Error ) {
    console.error( 'Unexpected error: ', error );

    // TODO: dispatch only user releavant errors to prevent spamming and flooding continiously
    // this.store.dispatch( new ErrorThrownAction( 'Unexpected error', 'Please reload page and try again...' ) );
  }
}
