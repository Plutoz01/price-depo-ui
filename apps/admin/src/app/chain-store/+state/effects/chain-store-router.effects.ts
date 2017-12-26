import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { DataPersistence } from "@nrwl/nx";
import { Pageable } from "@price-depo-ui/data-handling/src/models/pageable.class";
import { RouterEffectFactory } from "@price-depo-ui/shared/src/+state/router-effect-factory";
import { Observable } from "rxjs/Observable";
import { ManufacturerActionType } from "../../../manufacturers/+state/manufacturers.actions";
import { ChainStoreDetailsPageComponent } from "../../components/chain-store-details-page/details.component";
import { ChainStoreListPageComponent } from "../../components/chain-store-list-page/list.component";
import { LoadAllChainStoreAction, LoadChainStoreAction, NewChainStoreAction } from "../chain-store.actions";
import { ChainStoreModuleState } from "../chain-store.state";

@Injectable()
export class ChainStoreRouterEffects {

  @Effect() loadAll$ = this.dataPersistence.navigation( ChainStoreListPageComponent, {
    run: ( a: ActivatedRouteSnapshot, state: ChainStoreModuleState ) => {
      const pageable = Pageable.of( state.admin_chain_stores.pageNumber, state.admin_chain_stores.pageSize );
      return new LoadAllChainStoreAction( pageable );
    }
  } );

  @Effect() loadById$ = this.dataPersistence.navigation( ChainStoreDetailsPageComponent, {
    run: ( routeSnapshot: ActivatedRouteSnapshot ) => {
      const isNew = routeSnapshot.data[ 'isNew' ] && routeSnapshot.data[ 'isNew' ];
      if ( isNew ) {
        return new NewChainStoreAction();
      } else {
        const id = routeSnapshot.params[ 'chainStoreId' ];
        return new LoadChainStoreAction( id );
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
               private dataPersistence: DataPersistence<ChainStoreModuleState> ) {
    this.navigateOnDeleteSucceeded = RouterEffectFactory.buildNavigateOnActionEffect( actions$, router,
      ManufacturerActionType.deleteSuccess, [ 'chain-stores' ] );

    this.navigateOnSaveSucceeded$ = RouterEffectFactory.buildNavigateOnActionEffect( actions$, router,
      ManufacturerActionType.saveSuccess, [ 'chain-stores' ] );
  }
}
