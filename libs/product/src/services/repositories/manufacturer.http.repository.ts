import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { HttpCrudBaseRepository } from "libs/data-handling/src/repositories/http-crud-base.repository";
import { Manufacturer } from "libs/product/src/models/manufacturer.interface";

@Injectable()
export class ManufacturerHttpRepository extends HttpCrudBaseRepository<Manufacturer, string> {

  constructor( httpClient: HttpClient ) {
    super( httpClient );
  }

  protected getApiUrl(): string {
    // TODO: extract to common config service
    return 'http://localhost:3000/api/v1/manufacturers';
  }
}
