import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Selector, State } from "@ngrx/store";
import { PaginationInfo } from "@price-depo-ui/data-handling/src/models/pagination-info.interface";
import { ChainStore } from "@price-depo-ui/product/src/models/chain-store.interface";
import { ColumnDefinition } from "libs/shared/src/models/column-definition.interface";
import { getAllChainStoresSelector, getChainStorePaginationSelector } from "../../+state/chain-store.selectors";
import { ChainStoreModuleState } from "../../+state/chain-store.state";

@Component( {
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ChainStoreListPageComponent {

  readonly itemsSelector: Selector<State<ChainStoreModuleState>, ChainStore[]> =
    getAllChainStoresSelector;

  readonly paginationSelector: Selector<State<ChainStoreModuleState>, PaginationInfo> =
    getChainStorePaginationSelector;



  readonly columnDefinitions: ColumnDefinition[] = [
    { name: 'name', headerText: 'Name' },
    { name: 'website', headerText: 'Website' }
  ];
}
