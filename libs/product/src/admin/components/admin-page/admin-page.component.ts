import { Component, OnInit } from '@angular/core';
import { Manufacturer } from "@price-depo-ui/product/src/common/models/manufacturer.interface";
import { ColumnDefinition } from "@price-depo-ui/shared/src/models/column-definition.interface";
import { FormElementDefinition } from "@price-depo-ui/shared/src/models/form-element-definition.inteface";

@Component({
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  readonly manufacturerColumns: ColumnDefinition[] = [
    { name: 'name', headerText: 'Name' },
    { name: 'country', headerText: 'Country' }
  ];
  readonly manufacturers: Manufacturer[] = [
    { id: '101', name: 'Bosch', country: 'Germany' },
    { id: '201', name: 'Toshiba', country: 'Japan' },
    { id: '301', name: 'Siemens', country: 'Germany' },
    { id: '401', name: 'Samsung', country: 'Korea' }
  ];
  readonly manufacturerFormElementDefinitions: FormElementDefinition[] = [
    { key: 'name', label: 'Name', type: 'text', placeholder: 'Enter manufacturer name', required: true },
    { key: 'country', label: 'Country', type: 'text', placeholder: 'Enter country of manufacturer',
      description: 'Please add full name of country' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
