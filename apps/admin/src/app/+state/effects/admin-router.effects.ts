import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { Actions, Effect } from "@ngrx/effects";
import { DataPersistence } from "@nrwl/nx";
import { MasterDetailsState, Pageable } from "@price-depo-ui/data-handling";
import "rxjs/add/observable/from";
import { Observable } from "rxjs/Observable";
import { tap } from "rxjs/operators";
import { AdminDetailsPageComponent } from "../../components/admin-details/admin-details.component";
import { AdminListPageComponent } from "../../components/admin-list/admin-list.component";
import { AdminDataType } from "../../models/admin-data-type.enum";
import { MasterDetailsRouterData } from "../../models/master-details-router-data.interface";
import {
  AdminActionType,
  CreateNewAction,
  DeleteSuccessAction,
  LoadAllAction,
  LoadByIdAction,
  LoadDynamicFormDefAction,
  SaveSuccessAction
} from "../admin.actions";
import { AdminAppState } from "../admin.state";

@Injectable()
export class AdminRouterEffects {

  @Effect()
  readonly loadAllNavigation$ = this.buildLoadAllNavigationEffect();

  @Effect()
  readonly loadByIdNavigation$ = this.buildLoadByIdNavigationEffect();

  @Effect( { dispatch: false } )
  readonly navigateOnSaveSucceeded$ = this.buildNavigationSaveEffect();

  @Effect( { dispatch: false } )
  readonly navigateOnDeleteSucceeded = this.buildNavigationDeleteEffect();

  constructor( private readonly actions$: Actions,
               private readonly router: Router,
               private readonly dataPersistence: DataPersistence<AdminAppState> ) {
  }

  private static selectCreateOrLoadByIdAction( routeSnapshot: ActivatedRouteSnapshot,
                                               options: MasterDetailsRouterData<any> ): CreateNewAction | LoadByIdAction {
    const adminDataType: AdminDataType = options.dataType;

    const isNew = routeSnapshot.data.hasOwnProperty( 'isNew' ) && routeSnapshot.data[ 'isNew' ] === true;
    if ( isNew ) {
      return new CreateNewAction( adminDataType, options.initialValue );
    } else {
      const id = routeSnapshot.params[ 'id' ];
      return new LoadByIdAction( adminDataType, id );
    }
  }

  buildLoadAllNavigationEffect(): Observable<any> {
    return this.dataPersistence.navigation( AdminListPageComponent, {
      run: ( routeSnapshot: ActivatedRouteSnapshot, state: AdminAppState ) => {
        const options: MasterDetailsRouterData<any> = routeSnapshot.data.masterDetails;
        if ( !options ) {
          throw new Error( 'MasterDetailsRouterData is required, but missing' );
        }

        const adminDataType: AdminDataType = options.dataType;
        const masterDetailsState: MasterDetailsState<any> = state.app[ adminDataType ];

        let page = +routeSnapshot.queryParams[ 'page' ];
        if ( !Number.isInteger( page ) ) {
          page = masterDetailsState.pagination.pageNumber;
        }
        let size = +routeSnapshot.queryParams[ 'size' ];
        if ( !Number.isInteger( size ) ) {
          size = masterDetailsState.pagination.pageSize;
        }
        return new LoadAllAction( adminDataType, Pageable.of( page, size ) );

      },
      onError: ( a: ActivatedRouteSnapshot, error ) => {
        // TODO: refactor to use ErrorHandlingEffects.handleNavigationError
        console.error( 'Error', error );
      }
    } );
  }

  buildLoadByIdNavigationEffect(): Observable<any> {
    return this.dataPersistence.navigation( AdminDetailsPageComponent, {
      run: ( routeSnapshot: ActivatedRouteSnapshot ) => {
        const options: MasterDetailsRouterData<any> = routeSnapshot.data.masterDetails;
        if ( !options ) {
          throw new Error( 'MasterDetailsRouterData is required, but missing' );
        }

        const actions = [
          AdminRouterEffects.selectCreateOrLoadByIdAction( routeSnapshot, options ),
          new LoadDynamicFormDefAction( options.formDefId )
        ];

        return Observable.from( actions );
      },
      onError: ( a: ActivatedRouteSnapshot, error ) => {
        console.error( 'Error', error );
      }
    } );
  }

  buildNavigationDeleteEffect(): Observable<any> {
    return this.actions$.ofType( AdminActionType.deleteSuccess ).pipe(
      tap( ( action: DeleteSuccessAction ) => {
        this.router.navigate( [ action.dataType ] );
      } )
    );
  }

  buildNavigationSaveEffect(): Observable<any> {
    return this.actions$.ofType( AdminActionType.saveSuccess ).pipe(
      tap( ( action: SaveSuccessAction ) => {
        this.router.navigate( [ action.dataType ] );
      } )
    );
  }
}
