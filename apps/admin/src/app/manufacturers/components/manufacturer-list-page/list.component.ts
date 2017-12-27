import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Selector, State } from "@ngrx/store";
import { PaginationInfo } from "@price-depo-ui/data-handling/src/models/pagination-info.interface";
import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";
import { ColumnDefinition } from "libs/shared/src/models/column-definition.interface";
import { getManufacturerPaginationSelector, getManufacturersSelector } from "../../+state/manufacturers.selectors";
import { ManufacturersModuleState } from "../../+state/manufacturers.state";

@Component( {
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ManufacturerListPageComponent {

  readonly itemsSelector: Selector<State<ManufacturersModuleState>, Manufacturer[]> =
    getManufacturersSelector;
  readonly paginationSelector: Selector<State<ManufacturersModuleState>, PaginationInfo> =
    getManufacturerPaginationSelector;

  readonly columnDefinitions: ColumnDefinition[] = [
    { name: 'name', headerText: 'Name' },
    { name: 'country', headerText: 'Country' }
  ];
}
