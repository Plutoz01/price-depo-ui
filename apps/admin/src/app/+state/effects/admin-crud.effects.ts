import { Injectable } from "@angular/core";
import { Effect } from "@ngrx/effects";
import { DataPersistence } from "@nrwl/nx";
import { Identifiable } from "@price-depo-ui/data-handling/src/models/identifiable.interface";
import { Pageable } from "@price-depo-ui/data-handling/src/models/pageable.class";
import { CrudRepository } from "@price-depo-ui/data-handling/src/repositories/crud-repository.interface";
import { ErrorHandlingEffects } from "@price-depo-ui/error-handling/src/+state/error-handling.effects";
import { ChainStoreHttpRepository } from "@price-depo-ui/product/src/services/repositories/chain-store.http.repository";
import { ManufacturerHttpRepository } from "@price-depo-ui/product/src/services/repositories/manufacturer.http.repository";
import 'rxjs/add/operator/mergeMap';
import { Observable } from "rxjs/Observable";
import { AdminDataType } from "../../models/admin-data-type.enum";
import {
  AdminActionType, DeleteAction, DeleteSuccessAction, LoadAllAction, LoadAllSuccessAction, LoadByIdAction, LoadByIdSuccessAction,
  SaveAction, SaveSuccessAction
} from "../admin.actions";
import { AdminAppState } from "../admin.state";

@Injectable()
export class AdminCrudEffects {

  @Effect()
  readonly loadAll$: Observable<LoadAllSuccessAction> = this.buildLoadAllEffect$();

  @Effect()
  readonly loadById$: Observable<LoadByIdSuccessAction> = this.buildLoadByIdEffect$();

  @Effect()
  readonly delete$: Observable<DeleteSuccessAction> = this.buildDeleteEffect();

  @Effect()
  readonly save$: Observable<SaveSuccessAction> = this.buildSaveEffect();


  constructor( private readonly dataPersistence: DataPersistence<AdminAppState>,
               private readonly manufacturerRepository: ManufacturerHttpRepository,
               private readonly chainStoreRepository: ChainStoreHttpRepository) {
  }

  getRepositoryByDataType( adminDataType: AdminDataType ): CrudRepository<Identifiable<any>, any> {
    switch ( adminDataType ) {
      case AdminDataType.manufacturers:
        return this.manufacturerRepository;
      case AdminDataType.chainStores:
        return this.chainStoreRepository;
      default:
        throw new Error( 'unhandled data type: ' + adminDataType );
    }
  }

  buildLoadAllEffect$(): Observable<LoadAllSuccessAction> {
    return this.dataPersistence.fetch( AdminActionType.loadAll, {
      run: ( loadAllAction: LoadAllAction ) => {
        const repository = this.getRepositoryByDataType( loadAllAction.dataType );
        return repository.getAll( loadAllAction.pageable )
        // start a new request with page==0 if actual page is greater than response.totalPages
          .mergeMap( pagedResponse => {
            if ( loadAllAction.pageable.page > (pagedResponse.totalPages - 1) ) {
              return repository.getAll( Pageable.of( 0, loadAllAction.pageable.size ) );
            }
            return Observable.of( pagedResponse );
          } )
          .map( pagedResponse => new LoadAllSuccessAction( loadAllAction.dataType, pagedResponse ) );
      },
      onError: ErrorHandlingEffects.handleActionError
    } );
  }

  buildLoadByIdEffect$(): Observable<LoadByIdSuccessAction> {
    return this.dataPersistence.fetch( AdminActionType.loadById, {
      run: ( loadByIdAction: LoadByIdAction ) => {
        const repository = this.getRepositoryByDataType( loadByIdAction.dataType );
        return repository.getById( loadByIdAction.id )
        // TODO: navigate to /404 if not found
          .map( loadedItem => new LoadByIdSuccessAction( loadByIdAction.dataType, loadedItem ) );
      },
      onError: ErrorHandlingEffects.handleActionError
    } );
  }

  buildSaveEffect(): Observable<SaveSuccessAction> {
    return this.dataPersistence.pessimisticUpdate( AdminActionType.save, {
      run: ( saveAction: SaveAction ) => {
        const repository = this.getRepositoryByDataType( saveAction.dataType );
        return repository.save( saveAction.saveable )
          .map( saved => new SaveSuccessAction( saveAction.dataType, saved ) );
      },
      onError: ErrorHandlingEffects.handleActionError
    } );
  }

  buildDeleteEffect(): Observable<DeleteSuccessAction> {
    return this.dataPersistence.pessimisticUpdate( AdminActionType.delete, {
      run: ( deleteAction: DeleteAction ) => {
        const deletableId = deleteAction.deletable.id;
        const repository = this.getRepositoryByDataType( deleteAction.dataType );
        return repository.remove( deletableId ).map( () => {
          return new DeleteSuccessAction( deleteAction.dataType, deletableId );
        } );
      },
      onError: ErrorHandlingEffects.handleActionError
    } );
  }
}
