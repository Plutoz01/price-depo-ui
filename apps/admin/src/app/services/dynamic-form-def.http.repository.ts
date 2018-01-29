import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpCrudBaseRepository } from "@price-depo-ui/data-handling/src/repositories/http-crud-base.repository";
import { DynamicFormDef } from "@price-depo-ui/dynamic-form/src/models/dynamic-form.interface";

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
