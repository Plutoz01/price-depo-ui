import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Pageable } from "libs/data-handling/src/models/pageable.class";
import { PaginationInfo } from "libs/data-handling/src/models/pagination-info.interface";
import { MasterDetailsRouterData } from "apps/admin/src/app/models/master-details-router-data.interface";
import { Observable } from "rxjs/Observable";
import { Identifiable } from "../../../../../../libs/data-handling/src/models/identifiable.interface";
import { ColumnDefinition } from "../../../../../../libs/shared/src/models/column-definition.interface";

@Component( {
  selector: 'pd-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: [ './admin-list.component.scss' ]
} )
export class AdminListPageComponent<T extends Identifiable<any>> {

  readonly title: string;
  readonly columnDefinitions: ColumnDefinition[];

  readonly items$: Observable<T[]>;
  readonly paginationInfo$: Observable<PaginationInfo>;

  constructor( readonly store: Store<any>,
               private readonly router: Router,
               private readonly route: ActivatedRoute ) {
    const options: MasterDetailsRouterData<T> = route.snapshot.data.masterDetails;

    if( !options ) {
      throw new Error(  'MasterDetailsRouterData is required, but missing' );
    }

    this.title = options.title;
    this.columnDefinitions = options.columnDefinitions;

    const masterDetailsStore = this.store.select( options.masterDetailsStateSelector );
    this.items$ = masterDetailsStore.select( 'items' );
    this.paginationInfo$ = masterDetailsStore.select( 'pagination' );
  }

  onSelect( selected: T ) {
    this.router.navigate( [ `./${ selected.id }` ], {
      relativeTo: this.route
    } );
  }

  onCreateNew() {
    this.router.navigate( [ 'new' ], {
      relativeTo: this.route
    } );
  }

  onPageTo( pageable: Pageable ) {
    this.router.navigate( [], {
      queryParams: { page: pageable.page, size: pageable.size }
    } );
  }
}
