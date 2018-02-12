import { Injectable } from '@angular/core';
import { HttpSearchProviderBaseService } from '@price-depo-ui/dynamic-form';
import { ChainStore, ChainStoreFilterKeys, ChainStoreHttpRepository } from '@price-depo-ui/product';

@Injectable()
export class ChainStoreSearchProviderService extends HttpSearchProviderBaseService<ChainStore, string, ChainStoreFilterKeys> {

  constructor( httpRepository: ChainStoreHttpRepository ) {
    super( httpRepository );
  }

}
