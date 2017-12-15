import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Identifiable } from "@price-depo-ui/data-handling/src/models/identifiable.interface";
import { ColumnDefinition } from "@price-depo-ui/shared/src/models/column-definition.interface";
import { FormElementDefinition } from "@price-depo-ui/shared/src/models/form-element-definition.inteface";

@Component( {
  selector: 'pd-master-details',
  templateUrl: './master-details.component.html',
  styleUrls: [ './master-details.component.scss' ]
} )
export class MasterDetailsComponent<T extends Identifiable<any>> {

  @Input() items: T[] = [];
  @Input() columns: ColumnDefinition[] = [];
  @Input() formDefinitions: FormElementDefinition[];
  @Output() save = new EventEmitter<T>();
  @Output() delete = new EventEmitter<T>();

  selectedItem?: T;

  onSelect( selected: T | null ) {
    this.selectedItem = selected;
  }

  onNew() {
    this.selectedItem = <T>{ id: null };
  }

}
