import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaginationInfo } from "@price-depo-ui/data-handling/src/models/pagination-info.interface";
import { ColumnDefinition } from "@price-depo-ui/shared/src/models/column-definition.interface";

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
  @Output() select = new EventEmitter<Object | null>();
  @Output() pageTo = new EventEmitter<number>();

  getCellValue( item: Object, colName: string ): any {
    return item[ colName ] || '';
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

}
