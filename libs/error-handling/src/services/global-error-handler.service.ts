import { ErrorHandler, Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ErrorThrownAction } from "../+state/error-handling.actions";

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor( private store: Store<any> ){}

  handleError( error: Error ) {
    console.error( 'Unexpected error: ', error );

    this.store.dispatch( new ErrorThrownAction( 'Unexpected error', 'Please reload page and try again...' ) );
  }
}
