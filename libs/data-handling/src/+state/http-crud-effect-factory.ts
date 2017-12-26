import { Type } from "@angular/core";
import { DataPersistence } from "@nrwl/nx";
import { ErrorHandlingEffects } from "@price-depo-ui/error-handling/src/+state/error-handling.effects";
import { Observable } from "rxjs/Observable";
import { Identifiable } from "../models/identifiable.interface";
import { HttpCrudBaseRepository } from "../repositories/http-crud-base.repository";
import {
  DeleteAction, DeleteSuccessAction, LoadAllSuccessAction, LoadByIdAction, LoadByIdSuccessAction, SaveAction,
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
      run: () => this.repository.getAll()
        .map( ( items: M[] ) => new loadAllSuccessAction( items ) ),
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
