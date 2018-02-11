import * as uuidv4 from 'uuid/v4';

export enum NotificationLevel {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error'
}
export class Notification {
  readonly id = uuidv4();

  constructor( public readonly level: NotificationLevel,
               public readonly title: string,
               public readonly details?: string,
               public readonly closeable = true,
               public readonly hideAfterSeconds?: number ) {
  }
}
