import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Effect } from "@ngrx/effects";
import { DataPersistence } from "@nrwl/nx";
import { ManufacturerDetailsComponent } from "../../components/manufacturer-details/manufacturer-details.component";
import { ManufacturerListComponent } from "../../components/manufacturer-list/manufacturer-list.component";
import { LoadManufacturerAction, LoadManufacturersAction, NewManufacturerAction } from "../admin.actions";
import { AppState } from "../admin.interfaces";


@Injectable()
export class RouterEffects {

  @Effect() loadManufacturers$ = this.dataPersistence.navigation( ManufacturerListComponent, {
    run: () => {
      return new LoadManufacturersAction();
    }
  } );

  @Effect() loadManufacturer$ = this.dataPersistence.navigation( ManufacturerDetailsComponent, {
    run: ( routeSnapshot: ActivatedRouteSnapshot ) => {
      const isNew = routeSnapshot.data[ 'isNew' ] && routeSnapshot.data[ 'isNew' ];
      if ( isNew ) {
        return new NewManufacturerAction();
      } else {
        const id = routeSnapshot.params[ 'manufacturerId' ];
        return new LoadManufacturerAction( id );
      }
    },
    onError: ( a: ActivatedRouteSnapshot, error ) => {
      console.error( 'Error', error );
    }
  } );

  constructor( private dataPersistence: DataPersistence<AppState> ) {
  }
}
