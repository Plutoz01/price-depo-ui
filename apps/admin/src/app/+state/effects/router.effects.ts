import { Injectable } from "@angular/core";
import { Effect } from "@ngrx/effects";
import { DataPersistence } from "@nrwl/nx";
import { ManufacturerAdminComponent } from "../../components/manufacturer-admin/manufacturer-admin.component";
import { LoadManufacturersAction } from "../admin.actions";
import { AppState } from "../admin.interfaces";

@Injectable()
export class RouterEffects {

  @Effect() loadManufacturers = this.dataPersistence.navigation( ManufacturerAdminComponent, {
    run: () => new LoadManufacturersAction()
  } );

  constructor( private dataPersistence: DataPersistence<AppState> ) {
  }
}
