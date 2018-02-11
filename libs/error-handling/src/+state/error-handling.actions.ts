import { Action } from '@ngrx/store';

export enum ErrorHandlingActionType {
  errorThrown = 'ERROR_HANDLING_ERROR_THROWN'
}

export class ErrorThrownAction implements Action {
  readonly type = ErrorHandlingActionType.errorThrown;

  constructor( public readonly title: string, public readonly description?: string ) {}
}
