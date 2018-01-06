import { Injectable } from "@angular/core";
import { HttpSearchProviderBaseService } from "@price-depo-ui/dynamic-form/src/services/http-search-provider-base.service";
import { ManufacturerFilterKeys } from "@price-depo-ui/product/src/models/filters/manufacturer-filter.type";
import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";
import { ManufacturerHttpRepository } from "@price-depo-ui/product/src/services/repositories/manufacturer.http.repository";

@Injectable()
export class ManufacturerSearchProviderService extends HttpSearchProviderBaseService<Manufacturer, string, ManufacturerFilterKeys> {

  constructor( httpRepository: ManufacturerHttpRepository ) {
    super( httpRepository );
  }
}
