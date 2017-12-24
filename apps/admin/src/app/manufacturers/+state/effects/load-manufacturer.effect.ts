import { Injectable } from "@angular/core";
import { Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { DataPersistence } from "@nrwl/nx";
import { Manufacturer } from "libs/product/src/models/manufacturer.interface";
import { ManufacturerHttpRepository } from "libs/product/src/services/repositories/manufacturer.http.repository";
import { AdminAppState } from "../../../+state/admin.interfaces";
import { LOAD_MANUFACTURER, LoadManufacturerAction, ManufacturerLoadedAction } from "../manufacturers.actions";

@Injectable()
export class LoadManufacturerEffect {

  @Effect() loadManufacturer = this.dataPersistence.fetch( LOAD_MANUFACTURER, {
    run: ( action: LoadManufacturerAction ) => {
      // TODO: navigate to /404 if not found
      return this.manufacturerRepository.getById( action.id )
        .map( ( manufacturer: Manufacturer ) => new ManufacturerLoadedAction( manufacturer ) );
    },
    onError: ( a: Action, error ) => {
      console.error( 'Error', error );
    }
  } );

  constructor( private dataPersistence: DataPersistence<AdminAppState>,
               private manufacturerRepository: ManufacturerHttpRepository ) {
  }
}
