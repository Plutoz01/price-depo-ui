import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpFilterableCrudBaseRepository } from "@price-depo-ui/data-handling";

import { ProductFilterKeys } from "../../models/filters/product-filter.type";
import { Product } from "../../models/product.interface";

@Injectable()
export class ProductHttpRepository extends HttpFilterableCrudBaseRepository<Product, string, ProductFilterKeys> {

  constructor( httpClient: HttpClient ) {
    super( httpClient );
  }

  protected getApiUrl(): string {
    // TODO: extract to common config service
    return 'http://localhost:3000/api/v1/products';
  }
}
