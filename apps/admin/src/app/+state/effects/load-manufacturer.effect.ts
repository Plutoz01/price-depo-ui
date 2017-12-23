import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { DataPersistence } from "@nrwl/nx";
import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";
import { ManufacturerHttpRepository } from "@price-depo-ui/product/src/services/repositories/manufacturer.http.repository";
import { LOAD_MANUFACTURERS, ManufacturersLoadedAction } from "../admin.actions";
import { AppState } from "../admin.interfaces";

@Injectable()
export class LoadManufacturerEffect {

  @Effect() loadManufacturers = this.dataPersistence.fetch( LOAD_MANUFACTURERS, {
    run: () => {
      return this.manufacturerRepository.getAll()
        .map( ( manufacturers: Manufacturer[] ) => new ManufacturersLoadedAction( manufacturers ) );
    }
  } );

  constructor( private actions: Actions,
               private dataPersistence: DataPersistence<AppState>,
               private manufacturerRepository: ManufacturerHttpRepository ) {
  }
}
