import { Injectable } from "@angular/core";
import { Effect } from "@ngrx/effects";
import { DataPersistence } from "@nrwl/nx";
import { CrudEffectFactory } from "@price-depo-ui/data-handling/src/+state/crud-effect-factory";
import { ChainStoreHttpRepository } from "@price-depo-ui/product/src/services/repositories/chain-store.http.repository";
import { Observable } from "rxjs/Observable";
import {
  ChainStoreActionType, DeleteChainStoreSuccessAction, LoadAllChainStoreSuccessAction, LoadChainStoreSuccessAction,
  SaveChainStoreSuccessAction
} from "../chain-store.actions";
import { ChainStoreModuleState } from "../chain-store.state";

@Injectable()
export class ChainStoreCrudEffects {

  @Effect()
  readonly loadAll$: Observable<LoadAllChainStoreSuccessAction>;

  @Effect()
  readonly loadById$: Observable<LoadChainStoreSuccessAction>;

  @Effect()
  readonly delete$: Observable<DeleteChainStoreSuccessAction>;

  @Effect()
  readonly save$: Observable<SaveChainStoreSuccessAction>;

  constructor( dataPersistence: DataPersistence<ChainStoreModuleState>,
               repository: ChainStoreHttpRepository ) {
    const crudEffectFactory = new CrudEffectFactory( dataPersistence, repository );

    this.loadAll$ = crudEffectFactory.buildLoadAllEffect( ChainStoreActionType.loadAll, LoadAllChainStoreSuccessAction );

    this.loadById$ = crudEffectFactory.buildLoadByIdEffect( ChainStoreActionType.loadById, LoadChainStoreSuccessAction );

    this.delete$ = crudEffectFactory.buildDeleteEffect( ChainStoreActionType.delete, DeleteChainStoreSuccessAction );

    this.save$ = crudEffectFactory.buildSaveEffect( ChainStoreActionType.save, SaveChainStoreSuccessAction );
  }
}
