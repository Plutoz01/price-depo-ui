import { Injectable } from "@angular/core";
import { Effect } from "@ngrx/effects";
import { DataPersistence } from "@nrwl/nx";
import { Manufacturer } from "libs/product/src/models/manufacturer.interface";
import { ManufacturerHttpRepository } from "libs/product/src/services/repositories/manufacturer.http.repository";
import { AdminAppState } from "../../../+state/admin.interfaces";
import { LOAD_ALL_MANUFACTURERS, ManufacturersLoadedAction } from "../manufacturers.actions";

@Injectable()
export class LoadAllManufacturersEffect {

  @Effect() loadAllManufacturers = this.dataPersistence.fetch( LOAD_ALL_MANUFACTURERS, {
    run: () => {
      return this.manufacturerRepository.getAll()
        .map( ( manufacturers: Manufacturer[] ) => new ManufacturersLoadedAction( manufacturers ) );
    }
  } );

  constructor( private dataPersistence: DataPersistence<AdminAppState>,
               private manufacturerRepository: ManufacturerHttpRepository ) {
  }
}
