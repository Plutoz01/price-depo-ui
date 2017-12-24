import { Router } from "@angular/router";
import { Actions } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { DataPersistence } from "@nrwl/nx";
import { Observable } from "rxjs/Observable";
import { tap } from "rxjs/operators";
import { DeleteAction, DeleteSuccessAction, SaveAction, SaveSuccessAction } from "../models/crud-state-base.actions";
import { Identifiable } from "../models/identifiable.interface";
import { CrudHttpBaseRepository } from "../repositories/crud-http-base.repository";

export class CrudEffectFactory<M extends Identifiable<ID>, ID> {

  constructor( private actions$: Actions,
               private dataPersistence: DataPersistence<any>,
               private repository: CrudHttpBaseRepository<M, ID> ) {
  }

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
      onError: ( a: Action, error ) => {
        console.error( 'Error', error );
      }
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
      onError: ( a: Action, error ) => {
        console.error( 'Error', error );
      }
    } );
  }
}
