import { Type } from "@angular/core";
import { Action } from "@ngrx/store";
import { DataPersistence } from "@nrwl/nx";
import { Observable } from "rxjs/Observable";
import {
  DeleteAction, DeleteSuccessAction, LoadAllSuccessAction, LoadByIdAction, LoadByIdSuccessAction, SaveAction,
  SaveSuccessAction
} from "./crud-state-base.actions";
import { Identifiable } from "../models/identifiable.interface";
import { CrudHttpBaseRepository } from "../repositories/crud-http-base.repository";

export class CrudEffectFactory<M extends Identifiable<ID>, ID> {

  constructor( private dataPersistence: DataPersistence<any>,
               private repository: CrudHttpBaseRepository<M, ID> ) {
  }

  static handleError( action: Action, error: Error ) {
    console.error( `Action failed: ${ action.type }. Error: `, error );
  }

  buildSaveEffect<SS extends SaveSuccessAction<M>>( saveActionType: string, saveSuccessAction: Type<SS> ): Observable<SS> {
    return this.dataPersistence.pessimisticUpdate( saveActionType, {
      run: ( action: SaveAction<M> ) => {
        return this.repository.save( action.saveable )
          .map( ( saved: M ) => new saveSuccessAction( saved ) );
      },
      onError: CrudEffectFactory.handleError
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
      onError: CrudEffectFactory.handleError
    } );
  }

  buildLoadAllEffect<LS extends LoadAllSuccessAction<M>>( loadAllActionType: string, loadAllSuccessAction: Type<LS> ): Observable<LS> {
    return this.dataPersistence.fetch( loadAllActionType, {
      run: () => this.repository.getAll()
        .map( ( items: M[] ) => new loadAllSuccessAction( items ) ),
      onError: CrudEffectFactory.handleError
    } );
  }

  buildLoadByIdEffect<LS extends LoadByIdSuccessAction<M>>( loadByIdActionType: string, loadByIdSuccessAction: Type<LS> ): Observable<LS> {
    return this.dataPersistence.fetch( loadByIdActionType, {
      run: ( action: LoadByIdAction<ID> ) => this.repository.getById( action.id )
      // TODO: navigate to /404 if not found
        .map( ( item: M ) => new loadByIdSuccessAction( item ) ),
      onError: CrudEffectFactory.handleError
    } );
  }
}
