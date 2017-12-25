import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { ChainStore } from "@price-depo-ui/product/src/models/chain-store.interface";
import { ColumnDefinition } from "libs/shared/src/models/column-definition.interface";
import { getAllChainStoresSelector } from "../../+state/chain-store.selectors";
import { ChainStoreModuleState } from "../../+state/chain-store.state";

@Component( {
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ChainStoreListPageComponent {

  readonly columnDefinitions: ColumnDefinition[] = [
    { name: 'name', headerText: 'Name' },
    { name: 'website', headerText: 'Website' }
  ];

  readonly items$: Store<ChainStore[]> = this.store.select( getAllChainStoresSelector );

  constructor( private store: Store<ChainStoreModuleState> ) {
  }
}
