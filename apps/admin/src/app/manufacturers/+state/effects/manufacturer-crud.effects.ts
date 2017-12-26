import { Injectable } from "@angular/core";
import { Effect } from "@ngrx/effects";
import { DataPersistence } from "@nrwl/nx";
import { HttpCrudEffectFactory } from "@price-depo-ui/data-handling/src/+state/http-crud-effect-factory";
import { ManufacturerHttpRepository } from "@price-depo-ui/product/src/services/repositories/manufacturer.http.repository";
import { Observable } from "rxjs/Observable";
import {
  DeleteManufacturerSuccessAction, LoadAllManufacturerSuccessAction, LoadManufacturerSuccessAction, ManufacturerActionType,
  SaveManufacturerSuccessAction
} from "../manufacturers.actions";
import { ManufacturersModuleState } from "../manufacturers.state";

@Injectable()
export class ManufacturerCrudEffects {

  @Effect()
  readonly loadAll$: Observable<LoadAllManufacturerSuccessAction>;

  @Effect()
  readonly loadById$: Observable<LoadManufacturerSuccessAction>;

  @Effect()
  readonly delete$: Observable<DeleteManufacturerSuccessAction>;

  @Effect()
  readonly save$: Observable<SaveManufacturerSuccessAction>;

  constructor( dataPersistence: DataPersistence<ManufacturersModuleState>,
               manufacturerRepository: ManufacturerHttpRepository ) {
    const crudEffectFactory = new HttpCrudEffectFactory( dataPersistence, manufacturerRepository );

    this.loadAll$ = crudEffectFactory.buildLoadAllEffect( ManufacturerActionType.loadAll, LoadAllManufacturerSuccessAction );

    this.loadById$ = crudEffectFactory.buildLoadByIdEffect( ManufacturerActionType.loadById, LoadManufacturerSuccessAction );

    this.delete$ = crudEffectFactory.buildDeleteEffect( ManufacturerActionType.delete, DeleteManufacturerSuccessAction );

    this.save$ = crudEffectFactory.buildSaveEffect( ManufacturerActionType.save, SaveManufacturerSuccessAction );
  }
}
