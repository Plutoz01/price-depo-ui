import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { HttpFilterableCrudBaseRepository } from "@price-depo-ui/data-handling";

import { ChainStore } from "../../models/chain-store.interface";
import { ChainStoreFilterKeys } from "../../models/filters/chain-store-filter.type";

@Injectable()
export class ChainStoreHttpRepository extends HttpFilterableCrudBaseRepository<ChainStore, string, ChainStoreFilterKeys> {

  constructor( httpClient: HttpClient ) {
    super( httpClient );
  }

  protected getApiUrl(): string {
    // TODO: extract to common config service
    return 'http://localhost:3000/api/v1/chain-stores';
  }
}
