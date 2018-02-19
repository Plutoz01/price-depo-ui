import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpCrudBaseRepository } from '@price-depo-ui/data-handling';
import { DynamicFormDef } from '@price-depo-ui/dynamic-form';

@Injectable()
export class DynamicFormDefHttpRepository extends HttpCrudBaseRepository<DynamicFormDef, string> {
  constructor( httpClient: HttpClient ) {
    super( httpClient );
  }

  protected getApiUrl(): string {
    // TODO: extract to common config service
    return 'http://localhost:3000/api/v1/form-definitions';
  }
}
