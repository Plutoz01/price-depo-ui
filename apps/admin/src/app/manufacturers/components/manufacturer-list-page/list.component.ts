import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Manufacturer } from "libs/product/src/models/manufacturer.interface";
import { ColumnDefinition } from "libs/shared/src/models/column-definition.interface";
import { ManufacturersModuleState } from "../../+state/manufacturers.state";
import { getManufacturersSelector } from "../../+state/manufacturers.selectors";

@Component( {
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ManufacturerListPageComponent {

  readonly columnDefinitions: ColumnDefinition[] = [
    { name: 'name', headerText: 'Name' },
    { name: 'country', headerText: 'Country' }
  ];

  readonly items$: Store<Manufacturer[]> = this.store.select( getManufacturersSelector );

  constructor( private store: Store<ManufacturersModuleState> ) {
  }
}
