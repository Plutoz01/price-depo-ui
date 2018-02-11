import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpFilterableCrudBaseRepository } from '@price-depo-ui/data-handling';

import { ShopFilterKeys } from '../../models/filters/shop-filter.type';
import { Shop } from '../../models/shop.interface';

@Injectable()
export class ShopHttpRepository extends HttpFilterableCrudBaseRepository<Shop, string, ShopFilterKeys> {

  constructor( httpClient: HttpClient ) {
    super( httpClient );
  }

  protected getApiUrl(): string {
    // TODO: extract to common config service
    return 'http://localhost:3000/api/v1/shops';
  }
}
