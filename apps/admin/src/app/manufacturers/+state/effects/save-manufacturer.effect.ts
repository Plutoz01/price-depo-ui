import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { DataPersistence } from "@nrwl/nx";
import { ManufacturerHttpRepository } from "libs/product/src/services/repositories/manufacturer.http.repository";
import { Observable } from "rxjs/Observable";
import { tap } from "rxjs/operators";
import { MANUFACTURER_SAVED, ManufacturerSavedAction, SAVE_MANUFACTURER, SaveManufacturerAction } from "../manufacturers.actions";
import { ManufacturersModuleState } from "../manufacturers.interfaces";

@Injectable()
export class SaveManufacturerEffect {

  @Effect() saveManufacturer$ = this.dataPersistence.pessimisticUpdate<SaveManufacturerAction>( SAVE_MANUFACTURER, {
    run: action => {
      return this.manufacturerRepository.save( action.saveable )
        .map( savedManufacturer => new ManufacturerSavedAction( savedManufacturer ) );
    },
    onError: ( a: Action, error ) => {
      console.error( 'Error', error );
    }
  } );

  @Effect( { dispatch: false } )
  manufacturerSaved$: Observable<Action> = this.actions$.ofType( MANUFACTURER_SAVED ).pipe(
    tap( () => this.router.navigate( [ 'manufacturers' ] ) ),
    tap( () => console.log( 'TODO: send success message' ) )
  );

  constructor( private actions$: Actions,
               private dataPersistence: DataPersistence<ManufacturersModuleState>,
               private router: Router,
               private manufacturerRepository: ManufacturerHttpRepository ) {
  }
}
