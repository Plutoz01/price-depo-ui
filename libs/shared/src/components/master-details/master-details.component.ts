import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColumnDefinition } from "@price-depo-ui/shared/src/models/column-definition.interface";
import { FormElementDefinition } from "@price-depo-ui/shared/src/models/form-element-definition.inteface";

@Component( {
  selector: 'pd-master-details',
  templateUrl: './master-details.component.html',
  styleUrls: [ './master-details.component.scss' ]
} )
export class MasterDetailsComponent {

  @Input() items: Object[] = [];
  @Input() columns: ColumnDefinition[] = [];
  @Input() formDefinitions: FormElementDefinition[];
  @Output() save = new EventEmitter<Object>();

  selectedItem?: Object;

  onSelect( selected: Object | null ) {
    this.selectedItem = selected;
  }
}
