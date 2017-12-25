import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { DataPersistence } from "@nrwl/nx";
import { CrudEffectFactory } from "@price-depo-ui/data-handling/src/+state/crud.effects";
import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";
import { ManufacturerHttpRepository } from "@price-depo-ui/product/src/services/repositories/manufacturer.http.repository";
import { Observable } from "rxjs/Observable";
import { AdminAppState } from "../../../+state/admin.interfaces";
import {
  DELETE_MANUFACTURER, LOAD_ALL_MANUFACTURERS, LOAD_MANUFACTURER, MANUFACTURER_DELETED, MANUFACTURER_SAVED,
  ManufacturerDeletedAction, ManufacturerLoadedAction, ManufacturerSavedAction, ManufacturersLoadedAction, SAVE_MANUFACTURER
} from "../manufacturers.actions";

@Injectable()
export class ManufacturerCrudEffects {

  @Effect()
  loadAll$: Observable<ManufacturersLoadedAction>;

  @Effect()
  loadById$: Observable<ManufacturerLoadedAction>;

  @Effect()
  delete$: Observable<ManufacturerDeletedAction>;

  @Effect( { dispatch: false } )
  navigateOnDeleteSucceeded$: Observable<Action>;

  @Effect()
  save$: Observable<ManufacturerSavedAction>;

  @Effect( { dispatch: false } )
  navigateOnSaveSucceeded$: Observable<Action>;

  constructor( actions$: Actions,
               router: Router,
               dataPersistence: DataPersistence<AdminAppState>,
               manufacturerRepository: ManufacturerHttpRepository ) {
    const crudEffectFactory = new CrudEffectFactory<Manufacturer, string>( actions$, dataPersistence, manufacturerRepository );

    this.loadAll$ = crudEffectFactory.buildLoadAllEffect<ManufacturersLoadedAction>( LOAD_ALL_MANUFACTURERS, ManufacturersLoadedAction );

    this.loadById$ = crudEffectFactory.buildLoadByIdEffect<ManufacturerLoadedAction>( LOAD_MANUFACTURER, ManufacturerLoadedAction );

    this.delete$ = crudEffectFactory.buildDeleteEffect<ManufacturerDeletedAction>( DELETE_MANUFACTURER, ManufacturerDeletedAction );
    this.navigateOnDeleteSucceeded$ = crudEffectFactory.buildNavigateOnActionEffect( router, MANUFACTURER_DELETED, [ 'manufacturers' ] );

    this.save$ = crudEffectFactory.buildSaveEffect<ManufacturerSavedAction>( SAVE_MANUFACTURER, ManufacturerSavedAction );
    this.navigateOnSaveSucceeded$ = crudEffectFactory.buildNavigateOnActionEffect( router, MANUFACTURER_SAVED, [ 'manufacturers' ] );

  }
}
