import { Provider } from '@angular/core';
import { SearchProviderTokenKey, searchProviderTokens } from '../tokens/search-provider.tokens';
import { DynamicFormDefHttpRepository } from './dynamic-form-def.http.repository';
import { ChainStoreSearchProviderService } from './search-providers/chain-store-search-provider.service';
import { ManufacturerSearchProviderService } from './search-providers/manufacturer-search-provider.service';

const searchProviders: Provider[] = [
  {
    provide: searchProviderTokens[ SearchProviderTokenKey.chainStore ],
    useClass: ChainStoreSearchProviderService
  },
  {
    provide: searchProviderTokens[ SearchProviderTokenKey.manufacturer ],
    useClass: ManufacturerSearchProviderService
  }
];

export const services: Provider[] = [
  ...searchProviders,
  DynamicFormDefHttpRepository
];
