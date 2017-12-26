import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { DataPersistence } from "@nrwl/nx";
import { Pageable } from "@price-depo-ui/data-handling/src/models/pageable.class";
import { RouterEffectFactory } from "@price-depo-ui/shared/src/+state/router-effect-factory";
import { Observable } from "rxjs/Observable";
import { ManufacturerDetailsPageComponent } from "../../components/manufacturer-details-page/details.component";
import { ManufacturerListPageComponent } from "../../components/manufacturer-list-page/list.component";
import { LoadAllManufacturerAction, LoadManufacturerAction, ManufacturerActionType, NewManufacturerAction } from "../manufacturers.actions";
import { ManufacturersModuleState } from "../manufacturers.state";

@Injectable()
export class ManufacturerRouterEffects {

  @Effect()
  readonly loadAllManufacturer$ = this.dataPersistence.navigation( ManufacturerListPageComponent, {
    run: ( routeSnapshot: ActivatedRouteSnapshot, state: ManufacturersModuleState ) => {
      let page = +routeSnapshot.queryParams[ 'page' ];
      if ( !Number.isInteger( page ) ) {
        page = state.admin_manufacturers.pagination.pageNumber;
      }
      let size = +routeSnapshot.queryParams[ 'size' ];
      if ( !Number.isInteger( size ) ) {
        size = state.admin_manufacturers.pagination.pageSize;
      }
      return new LoadAllManufacturerAction( Pageable.of( page, size ) );
    }
  } );

  @Effect()
  readonly loadManufacturerById = this.dataPersistence.navigation( ManufacturerDetailsPageComponent, {
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

  @Effect( { dispatch: false } )
  readonly navigateOnDeleteSucceeded: Observable<Action>;

  @Effect( { dispatch: false } )
  readonly navigateOnSaveSucceeded$: Observable<Action>;

  constructor( actions$: Actions,
               router: Router,
               private dataPersistence: DataPersistence<ManufacturersModuleState> ) {
    this.navigateOnDeleteSucceeded = RouterEffectFactory.buildNavigateOnActionEffect( actions$, router,
      ManufacturerActionType.deleteSuccess, [ 'manufacturers' ] );

    this.navigateOnSaveSucceeded$ = RouterEffectFactory.buildNavigateOnActionEffect( actions$, router,
      ManufacturerActionType.saveSuccess, [ 'manufacturers' ] );
  }
}
