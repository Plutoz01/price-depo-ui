import { Component } from '@angular/core';
import { Manufacturer } from "@price-depo-ui/product/src/common/models/manufacturer.interface";
import { ManufacturerHttpRepository } from "@price-depo-ui/product/src/common/repositories/manufacturer.http.repository";
import { ColumnDefinition } from "@price-depo-ui/shared/src/models/column-definition.interface";
import { FormElementDefinition } from "@price-depo-ui/shared/src/models/form-element-definition.inteface";
import { Observable } from "rxjs/Observable";

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

  constructor( private manufacturerRepository: ManufacturerHttpRepository ) {
    this.manufacturers$ = manufacturerRepository.getAll();
  }

  onSave( manufacturerToSave: Manufacturer ) {
    this.manufacturerRepository.save( manufacturerToSave ).subscribe();
  }

  onDelete( manufacturerToDelete: Manufacturer ) {
    this.manufacturerRepository.remove( manufacturerToDelete.id ).subscribe();
  }
}
