import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import 'rxjs/add/operator/switchMap';
import { DataLoaded, LOAD_DATA, LoadData } from './app.actions';
import { AppState } from './app.interfaces';

@Injectable()
export class AppEffects {
  @Effect() loadData = this.dataPersistence.fetch( LOAD_DATA, {
    run: ( a: LoadData, state: AppState ) => new DataLoaded(),

    onError: ( a: LoadData, error ) => {
      console.error( 'Error', error );
    }
  } );

  constructor( private actions: Actions, private dataPersistence: DataPersistence<AppState> ) {
  }
}
