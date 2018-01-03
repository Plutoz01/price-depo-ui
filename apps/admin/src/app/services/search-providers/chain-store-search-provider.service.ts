import { Injectable } from "@angular/core";
import { ChainStore } from "@price-depo-ui/product/src/models/chain-store.interface";
import { ChainStoreFilterKeys } from "@price-depo-ui/product/src/models/filters/chain-store-filter.type";
import { ChainStoreHttpRepository } from "@price-depo-ui/product/src/services/repositories/chain-store.http.repository";
import { HttpSearchProviderBaseService } from "../../../../../../libs/dynamic-form/src/services/http-search-provider-base.service";

@Injectable()
export class ChainStoreSearchProviderService extends HttpSearchProviderBaseService<ChainStore, string, ChainStoreFilterKeys> {

  constructor( httpRepository: ChainStoreHttpRepository ) {
    super( httpRepository );
  }

}
