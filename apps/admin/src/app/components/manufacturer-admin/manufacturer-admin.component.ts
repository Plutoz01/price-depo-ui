import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Manufacturer } from "libs/product/src/models/manufacturer.interface";
import { ManufacturerHttpRepository } from "libs/product/src/services/repositories/manufacturer.http.repository";
import { ColumnDefinition } from "libs/shared/src/models/column-definition.interface";
import { FormElementDefinition } from "libs/shared/src/models/form-element-definition.inteface";
import { Observable } from "rxjs/Observable";
import { AppState } from "../../+state/admin.interfaces";
import { getManufacturersSelector } from "../../+state/admin.selectors";

@Component( {
  selector: 'pd-manufacturer-admin',
  templateUrl: './manufacturer-admin.component.html',
  styleUrls: [ './manufacturer-admin.component.scss' ]
} )
export class ManufacturerAdminComponent {

  readonly manufacturerColumns: ColumnDefinition[] = [
    { name: 'name', headerText: 'Name' },
    { name: 'country', headerText: 'Country' }
  ];
  readonly manufacturerFormElementDefinitions: FormElementDefinition[] = [
    { key: 'name', label: 'Name', type: 'text', placeholder: 'Enter manufacturer name', required: true },
    {
      key: 'country', label: 'Country', type: 'text', placeholder: 'Enter country of manufacturer',
      description: 'Please add full name of country'
    }
  ];

  readonly manufacturers$: Observable<Manufacturer[]>;

  constructor( private manufacturerRepository: ManufacturerHttpRepository, private state: Store<AppState> ) {
    this.manufacturers$ = state.select( getManufacturersSelector );
  }

  onSave( manufacturerToSave: Manufacturer ) {
    this.manufacturerRepository.save( manufacturerToSave ).subscribe();
  }

  onDelete( manufacturerToDelete: Manufacturer ) {
    this.manufacturerRepository.remove( manufacturerToDelete.id ).subscribe();
  }
}
