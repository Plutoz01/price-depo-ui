import { InjectionToken } from "@angular/core";
import { FilterableRepository } from "@price-depo-ui/data-handling/src/repositories/filterable-repository.interface";
import { ChainStore } from "@price-depo-ui/product/src/models/chain-store.interface";
import { ChainStoreFilterKeys } from "@price-depo-ui/product/src/models/filters/chain-store-filter.type";

export const filterableChainStoreProviderToken
  = new InjectionToken<FilterableRepository<ChainStore, ChainStoreFilterKeys>>( 'filterableChainStoreProviderToken' );
