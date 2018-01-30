import { InjectionToken } from "@angular/core";
import { SearchProvider } from "@price-depo-ui/dynamic-form/src/models/search-provider.interface";
import { ChainStoreSearchProviderService } from "../services/search-providers/chain-store-search-provider.service";
import { ManufacturerSearchProviderService } from "../services/search-providers/manufacturer-search-provider.service";

export enum SearchProviderTokenKey {
  chainStore = 'chainStoreSearchProvider',
  manufacturer = 'manufacturerSearchProvider'
}

export const searchProviderTokens: { [ key: string ]: InjectionToken<SearchProvider<any, any, any>> } = {
  chainStoreSearchProvider: new InjectionToken<ChainStoreSearchProviderService>( 'chainStoreSearchProvider' ),
  manufacturerSearchProvider: new InjectionToken<ManufacturerSearchProviderService>( 'manufacturerSearchProvider' )
};
