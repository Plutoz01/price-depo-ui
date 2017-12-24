import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() select = new EventEmitter<Object | null>();

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
