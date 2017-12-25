import { Router } from "@angular/router";
import { Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { DataPersistence } from "@nrwl/nx";
import { Observable } from "rxjs/Observable";
import { tap } from "rxjs/operators";
import {
  DeleteAction, DeleteSuccessAction, LoadAllSuccessAction, LoadByIdAction, LoadByIdSuccessAction, SaveAction,
  SaveSuccessAction
} from "../models/crud-state-base.actions";
import { Identifiable } from "../models/identifiable.interface";
import { CrudHttpBaseRepository } from "../repositories/crud-http-base.repository";

export class CrudEffectFactory<M extends Identifiable<ID>, ID> {

  constructor( private actions$: Actions,
               private dataPersistence: DataPersistence<any>,
               private repository: CrudHttpBaseRepository<M, ID> ) {
  }

  static handleError( action: Action, error: Error ) {
    console.error( `Action failed: ${ action.type }. Error: `, error );
  }

  // TODO: should not be part of a crud factory ( has different purpose )
  buildNavigateOnActionEffect( router: Router, actionType: string, navigationTarget: string[] ): Observable<Action> {
    return this.actions$.ofType( actionType ).pipe(
      tap( () => router.navigate( navigationTarget ) )
    );
  }

  buildSaveEffect<SS extends SaveSuccessAction<M>>( saveActionType: string, saveSuccessCreator: { new( saved: M ): SS; } ): Observable<SS> {
    return this.dataPersistence.pessimisticUpdate( saveActionType, {
      run: ( action: SaveAction<M> ) => {
        return this.repository.save( action.saveable )
          .map( ( saved: M ) => new saveSuccessCreator( saved ) );
      },
      onError: CrudEffectFactory.handleError
    } );
  }

  buildDeleteEffect<DS extends DeleteSuccessAction<ID>>( deleteActionType: string,
                                                         deleteSuccessCreator: { new( id: ID ): DS; } ): Observable<DS> {
    return this.dataPersistence.pessimisticUpdate( deleteActionType, {
      run: ( action: DeleteAction<M> ) => {
        const deletableId = action.deletable.id;
        return this.repository.remove( deletableId ).map( () => {
          return new deleteSuccessCreator( deletableId );
        } );
      },
      onError: CrudEffectFactory.handleError
    } );
  }

  buildLoadAllEffect<LS extends LoadAllSuccessAction<M>>( loadAllActionType: string,
                                                          loadAllSuccessCreator: { new( items: M[] ): LS; } ): Observable<LS> {
    return this.dataPersistence.fetch( loadAllActionType, {
      run: () => this.repository.getAll()
        .map( ( items: M[] ) => new loadAllSuccessCreator( items ) ),
      onError: CrudEffectFactory.handleError
    } );
  }

  buildLoadByIdEffect<LS extends LoadByIdSuccessAction<M>>( loadByIdActionType: string,
                                                            loadByIdSuccessCreator: { new( item: M ): LS; } ): Observable<LS> {
    return this.dataPersistence.fetch( loadByIdActionType, {
      run: ( action: LoadByIdAction<ID> ) => this.repository.getById( action.id )
      // TODO: navigate to /404 if not found
        .map( ( item: M ) => new loadByIdSuccessCreator( item ) ),
      onError: CrudEffectFactory.handleError
    } );
  }
}
