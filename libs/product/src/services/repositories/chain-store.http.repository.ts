import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { ChainStore } from "@price-depo-ui/product/src/models/chain-store.interface";
import { CrudHttpBaseRepository } from "libs/data-handling/src/repositories/crud-http-base.repository";

@Injectable()
export class ChainStoreHttpRepository extends CrudHttpBaseRepository<ChainStore, string> {

  constructor( httpClient: HttpClient ) {
    super( httpClient );
  }

  protected getApiUrl(): string {
    // TODO: extract to common config service
    return 'http://localhost:3000/api/v1/chain-stores';
  }
}
