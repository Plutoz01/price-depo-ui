import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { HttpFilterableCrudBaseRepository } from "@price-depo-ui/data-handling/src/repositories/http-filterable-crud-base.repository";
import { ChainStore } from "@price-depo-ui/product/src/models/chain-store.interface";
import { ChainStoreFilterKeys } from "@price-depo-ui/product/src/models/filters/chain-store-filter.type";

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
