import { Provider } from "@angular/core";
import { chainStoreSearchProviderToken, manufacturerSearchProviderToken } from "../tokens/search-provider.tokens";
import { ChainStoreSearchProviderService } from "./search-providers/chain-store-search-provider.service";
import { ManufacturerSearchProviderService } from "./search-providers/manufacturer-search-provider.service";

export const filterableProviders: Provider[] = [
  { provide: chainStoreSearchProviderToken, useClass: ChainStoreSearchProviderService },
  { provide: manufacturerSearchProviderToken, useClass: ManufacturerSearchProviderService }
];
