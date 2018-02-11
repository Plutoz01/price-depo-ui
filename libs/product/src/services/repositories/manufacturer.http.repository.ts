import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpFilterableCrudBaseRepository } from '@price-depo-ui/data-handling';

import { ManufacturerFilterKeys } from '../../models/filters/manufacturer-filter.type';
import { Manufacturer } from '../../models/manufacturer.interface';

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
