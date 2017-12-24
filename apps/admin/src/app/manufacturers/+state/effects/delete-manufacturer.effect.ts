import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { DataPersistence } from "@nrwl/nx";
import { ManufacturerHttpRepository } from "libs/product/src/services/repositories/manufacturer.http.repository";
import { Observable } from "rxjs/Observable";
import { tap } from "rxjs/operators";

import { AdminAppState } from "../../../+state/admin.interfaces";
import { DELETE_MANUFACTURER, DeleteManufacturerAction, MANUFACTURER_DELETED, ManufacturerDeletedAction } from "../manufacturers.actions";

@Injectable()
export class DeleteManufacturerEffect {

  @Effect() deleteManufacturer$ = this.dataPersistence.pessimisticUpdate<DeleteManufacturerAction>( DELETE_MANUFACTURER, {
    run: action => {
      const deletableId = action.deletable.id;
      return this.manufacturerRepository.remove( deletableId ).map( () => new ManufacturerDeletedAction( deletableId ) );
    },
    onError: ( a: Action, error ) => {
      console.error( 'Error', error );
    }
  } );

  @Effect( { dispatch: false } )
  manufacturerDeleted$: Observable<Action> = this.actions$.ofType( MANUFACTURER_DELETED ).pipe(
    tap( () => this.router.navigate( [ 'manufacturers' ] ) ),
    tap( () => console.log( 'TODO: send success message' ) )
  );

  constructor( private actions$: Actions,
               private dataPersistence: DataPersistence<AdminAppState>,
               private router: Router,
               private manufacturerRepository: ManufacturerHttpRepository ) {
  }
}
