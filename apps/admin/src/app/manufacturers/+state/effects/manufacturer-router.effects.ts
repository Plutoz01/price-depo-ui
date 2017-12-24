import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Effect } from "@ngrx/effects";
import { DataPersistence } from "@nrwl/nx";
import { ManufacturerDetailsPageComponent } from "../../components/manufacturer-details/manufacturer-details.component";
import { ManufacturerListPageComponent } from "../../components/manufacturer-list/list.component";
import { LoadAllManufacturersAction, LoadManufacturerAction, NewManufacturerAction } from "../manufacturers.actions";
import { ManufacturersModuleState } from "../manufacturers.interfaces";

@Injectable()
export class ManufacturerRouterEffects {

  @Effect() loadManufacturers$ = this.dataPersistence.navigation( ManufacturerListPageComponent, {
    run: () => {
      return new LoadAllManufacturersAction();
    }
  } );

  @Effect() loadManufacturer$ = this.dataPersistence.navigation( ManufacturerDetailsPageComponent, {
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

  constructor( private dataPersistence: DataPersistence<ManufacturersModuleState> ) {
  }
}
