import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pageable } from "@price-depo-ui/data-handling/src/models/pageable.class";
import { PaginationInfo } from "@price-depo-ui/data-handling/src/models/pagination-info.interface";
import { ColumnDefinition } from "@price-depo-ui/shared/src/models/column-definition.interface";
import * as _ from 'lodash';

@Component( {
  selector: 'pd-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: [ './data-table.component.scss' ]
} )
export class DataTableComponent {

  selectedIndex?: number;

  @Input() items: Object[] = [];
  @Input() columns: ColumnDefinition[] = [];
  @Input() paginationInfo?: PaginationInfo;
  @Input() pageSizes?: number[] = Pageable.defaultPageSizes;
  @Output() select = new EventEmitter<Object | null>();
  @Output() pageTo = new EventEmitter<Pageable>();

  getCellValue( item: Object, path: string ): any {
    return _.get( item, path, '' );
  }

  onSelect( selectionIndex: number ) {
    if ( selectionIndex !== this.selectedIndex ) {
      this.selectedIndex = selectionIndex;
      this.select.emit( this.items[ selectionIndex ] );
    } else {
      this.selectedIndex = null;
      this.select.emit( null );
    }
  }

  onPageNumberChange( newPageNumber: number ) {
    this.onPageTo( newPageNumber, this.paginationInfo.pageSize );
  }

  onPageSizeChange( newPageSize: number ) {
    this.onPageTo( this.paginationInfo.pageNumber, newPageSize );
  }

  onPageTo( pageNumber: number, pageSize: number ) {
    let pageable = Pageable.of( pageNumber, pageSize );

    if ( pageable.firstIndex > ( this.paginationInfo.totalItems - 1 ) ) {
      pageable = Pageable.of( 0, pageSize );
    }

    if ( pageable.page !== this.paginationInfo.pageNumber || pageable.size !== this.paginationInfo.pageSize ) {
      this.pageTo.emit( pageable );
    }
  }

}
