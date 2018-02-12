import { Injectable } from '@angular/core';
import { HttpSearchProviderBaseService } from '@price-depo-ui/dynamic-form';
import { Manufacturer, ManufacturerFilterKeys, ManufacturerHttpRepository } from '@price-depo-ui/product';

@Injectable()
export class ManufacturerSearchProviderService extends HttpSearchProviderBaseService<Manufacturer, string, ManufacturerFilterKeys> {

  constructor( httpRepository: ManufacturerHttpRepository ) {
    super( httpRepository );
  }
}
