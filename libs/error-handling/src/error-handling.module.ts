import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { ErrorHandlingEffects } from './+state/error-handling.effects';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { NotificationsModule } from '../../notification';

@NgModule( {
  imports: [
    CommonModule,
    NotificationsModule,
    EffectsModule.forFeature( [ ErrorHandlingEffects ] )
  ],
  providers: [
    ErrorHandlingEffects,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ]
} )
export class ErrorHandlingModule {
}
