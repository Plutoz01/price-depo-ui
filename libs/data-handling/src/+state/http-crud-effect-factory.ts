import { Type } from "@angular/core";
import { DataPersistence } from "@nrwl/nx";
import { Pageable } from "@price-depo-ui/data-handling/src/models/pageable.class";
import { PagedResponse } from "@price-depo-ui/data-handling/src/models/paged-response.interface";
import { ErrorHandlingEffects } from "@price-depo-ui/error-handling/src/+state/error-handling.effects";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/mergeMap';
import { Identifiable } from "../models/identifiable.interface";
import { HttpCrudBaseRepository } from "../repositories/http-crud-base.repository";
import {
  DeleteAction, DeleteSuccessAction, LoadAllAction, LoadAllSuccessAction, LoadByIdAction, LoadByIdSuccessAction, SaveAction,
  SaveSuccessAction
} from "./crud-state-base.actions";

export class HttpCrudEffectFactory<M extends Identifiable<ID>, ID> {

  constructor( private dataPersistence: DataPersistence<any>,
               private repository: HttpCrudBaseRepository<M, ID> ) {
  }


  buildSaveEffect<SS extends SaveSuccessAction<M>>( saveActionType: string, saveSuccessAction: Type<SS> ): Observable<SS> {
    return this.dataPersistence.pessimisticUpdate( saveActionType, {
      run: ( action: SaveAction<M> ) => {
        return this.repository.save( action.saveable )
          .map( ( saved: M ) => new saveSuccessAction( saved ) );
      },
      onError: ErrorHandlingEffects.handleActionError
    } );
  }

  buildDeleteEffect<DS extends DeleteSuccessAction<ID>>( deleteActionType: string, deleteSuccessAction: Type<DS> ): Observable<DS> {
    return this.dataPersistence.pessimisticUpdate( deleteActionType, {
      run: ( action: DeleteAction<M> ) => {
        const deletableId = action.deletable.id;
        return this.repository.remove( deletableId ).map( () => {
          return new deleteSuccessAction( deletableId );
        } );
      },
      onError: ErrorHandlingEffects.handleActionError
    } );
  }

  buildLoadAllEffect<LS extends LoadAllSuccessAction<M>>( loadAllActionType: string, loadAllSuccessAction: Type<LS> ): Observable<LS> {
    return this.dataPersistence.fetch( loadAllActionType, {
      run: ( action: LoadAllAction<M> ) => this.repository.getAll( action.pageable )
        // start a new request with page==0 if actual page is greater than response.totalPages
        .mergeMap( ( pagedResponse: PagedResponse<M> ) => {
          if ( action.pageable.page > ( pagedResponse.totalPages - 1 ) ) {
            return this.repository.getAll( Pageable.of( 0, action.pageable.size ) );
          }
          return Observable.of( pagedResponse );
        } )
        .map( ( pagedResponse: PagedResponse<M> ) => new loadAllSuccessAction( pagedResponse ) ),
      onError: ErrorHandlingEffects.handleActionError
    } );
  }

  buildLoadByIdEffect<LS extends LoadByIdSuccessAction<M>>( loadByIdActionType: string, loadByIdSuccessAction: Type<LS> ): Observable<LS> {
    return this.dataPersistence.fetch( loadByIdActionType, {
      run: ( action: LoadByIdAction<ID> ) => this.repository.getById( action.id )
      // TODO: navigate to /404 if not found
        .map( ( item: M ) => new loadByIdSuccessAction( item ) ),
      onError: ErrorHandlingEffects.handleActionError
    } );
  }
}
