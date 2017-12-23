import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { CrudHttpBaseRepository } from "libs/data-handling/src/repositories/crud-http-base.repository";
import { Manufacturer } from "libs/product/src/models/manufacturer.interface";

@Injectable()
export class ManufacturerHttpRepository extends CrudHttpBaseRepository<Manufacturer, string> {

  constructor( httpClient: HttpClient ) {
    super( httpClient );
  }

  protected getApiUrl(): string {
    // TODO: extract to common config service
    return 'http://localhost:3000/api/v1/manufacturers';
  }
}
