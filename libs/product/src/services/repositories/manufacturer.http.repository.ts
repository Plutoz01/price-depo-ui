import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { HttpFilterableCrudBaseRepository } from "@price-depo-ui/data-handling/src/repositories/http-filterable-crud-base.repository";
import { ManufacturerFilterKeys } from "@price-depo-ui/product/src/models/filters/manufacturer-filter.type";
import { Manufacturer } from "libs/product/src/models/manufacturer.interface";

@Injectable()
export class ManufacturerHttpRepository extends HttpFilterableCrudBaseRepository<Manufacturer, string, ManufacturerFilterKeys> {

  constructor( httpClient: HttpClient ) {
    super( httpClient );
  }

  protected getApiUrl(): string {
    // TODO: extract to common config service
    return 'http://localhost:3000/api/v1/manufacturers';
  }
}
