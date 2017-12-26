import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Selector, Store } from "@ngrx/store";
import { MasterDetailsState } from "@price-depo-ui/data-handling/src/+state/master-details/master-details.state";
import { PaginationInfo } from "@price-depo-ui/data-handling/src/models/pagination-info.interface";
import { Observable } from "rxjs/Observable";
import { Identifiable } from "../../../../data-handling/src/models/identifiable.interface";
import { ColumnDefinition } from "../../models/column-definition.interface";

@Component( {
  selector: 'pd-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: [ './admin-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class AdminListPageComponent<T extends Identifiable<any>> implements OnInit {

  @Input() title: string;
  @Input() columnDefinitions: ColumnDefinition[];
  @Input() itemsSelector: Selector<MasterDetailsState<T>, T[]>;
  @Input() paginationSelector: Selector<MasterDetailsState<T>, PaginationInfo>;

  items$: Observable<T[]>;
  paginationInfo$: Observable<PaginationInfo>;

  constructor( private readonly store: Store<any>,
               private readonly router: Router,
               private readonly route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.items$ = this.store.select( this.itemsSelector );
    this.paginationInfo$ = this.store.select( this.paginationSelector );
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

  onPageTo( newPage: number ) {
    this.router.navigate( [], {
      queryParams: { page: newPage }
    } );
  }
}
