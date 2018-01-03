import { InjectionToken } from "@angular/core";
import { ChainStoreSearchProviderService } from "../services/search-providers/chain-store-search-provider.service";

export const chainStoreSearchProviderToken
  = new InjectionToken<ChainStoreSearchProviderService>( 'chainStoreSearchProviderToken' );
