import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { DataPersistence } from "@nrwl/nx";
import { Pageable } from "@price-depo-ui/data-handling/src/models/pageable.class";
import { RouterEffectFactory } from "@price-depo-ui/shared/src/+state/router-effect-factory";
import { Observable } from "rxjs/Observable";
import { ChainStoreDetailsPageComponent } from "../../components/chain-store-details-page/details.component";
import { ChainStoreListPageComponent } from "../../components/chain-store-list-page/list.component";
import { ChainStoreActionType, LoadAllChainStoreAction, LoadChainStoreAction, NewChainStoreAction } from "../chain-store.actions";
import { ChainStoreModuleState } from "../chain-store.state";

@Injectable()
export class ChainStoreRouterEffects {

  @Effect() loadAll$ = this.dataPersistence.navigation( ChainStoreListPageComponent, {
    run: ( routeSnapshot: ActivatedRouteSnapshot, state: ChainStoreModuleState ) => {
      // TODO: extract and make more generic ( quite same for all the router effects )
      let page = +routeSnapshot.queryParams[ 'page' ];
      if ( !Number.isInteger( page ) ) {
        page = state.admin_chain_stores.pagination.pageNumber;
      }
      let size = +routeSnapshot.queryParams[ 'size' ];
      if ( !Number.isInteger( size ) ) {
        size = state.admin_chain_stores.pagination.pageSize;
      }
      return new LoadAllChainStoreAction( Pageable.of( page, size ) );
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
      ChainStoreActionType.deleteSuccess, [ 'chain-stores' ] );

    this.navigateOnSaveSucceeded$ = RouterEffectFactory.buildNavigateOnActionEffect( actions$, router,
      ChainStoreActionType.saveSuccess, [ 'chain-stores' ] );
  }
}
