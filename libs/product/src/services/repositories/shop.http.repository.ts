import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpCrudBaseRepository } from "@price-depo-ui/data-handling/src/repositories/http-crud-base.repository";
import { Shop } from "@price-depo-ui/product/src/models/shop.interface";

@Injectable()
export class ShopHttpRepository extends HttpCrudBaseRepository<Shop, string> {

  constructor( httpClient: HttpClient ) {
    super( httpClient );
  }

  protected getApiUrl(): string {
    // TODO: extract to common config service
    return 'http://localhost:3000/api/v1/shops';
  }
}
