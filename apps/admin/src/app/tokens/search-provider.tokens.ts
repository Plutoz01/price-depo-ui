import { InjectionToken } from "@angular/core";
import { ChainStoreSearchProviderService } from "../services/search-providers/chain-store-search-provider.service";
import { ManufacturerSearchProviderService } from "../services/search-providers/manufacturer-search-provider.service";

export const chainStoreSearchProviderToken
  = new InjectionToken<ChainStoreSearchProviderService>( 'chainStoreSearchProviderToken' );

export const manufacturerSearchProviderToken
 = new InjectionToken<ManufacturerSearchProviderService>( 'manufacturerSearchProviderToken' );
