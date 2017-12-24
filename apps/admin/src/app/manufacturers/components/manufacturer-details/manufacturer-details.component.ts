import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Manufacturer } from "libs/product/src/models/manufacturer.interface";
import { FormElementDefinition } from "libs/shared/src/models/form-element-definition.inteface";
import { Observable } from "rxjs/Observable";
import { DeleteManufacturerAction, SaveManufacturerAction } from "../../+state/manufacturers.actions";
import { getManufacturerSelector } from "../../+state/manufacturers.selectors";
import { AdminAppState } from "../../../+state/admin.interfaces";

@Component( {
  selector: 'pd-manufacturer-details',
  templateUrl: './manufacturer-details.component.html',
  styleUrls: [ './manufacturer-details.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ManufacturerDetailsPageComponent {

  readonly manufacturerFormElementDefinitions: FormElementDefinition[] = [
    { key: 'name', label: 'Name', type: 'text', placeholder: 'Enter manufacturer name', required: true },
    {
      key: 'country', label: 'Country', type: 'text', placeholder: 'Enter country of manufacturer',
      description: 'Please add full name of country'
    }
  ];

  readonly manufacturer$: Observable<Manufacturer>;

  constructor( private store: Store<AdminAppState>, private router: Router ) {
    this.manufacturer$ = store.select( getManufacturerSelector );
  }

  onSave( manufacturer: Manufacturer ) {
    this.store.dispatch( new SaveManufacturerAction( manufacturer ) );
  }

  onDelete( manufacturer: Manufacturer ) {
    this.store.dispatch( new DeleteManufacturerAction( manufacturer ) );
  }

  onNavigateBack() {
    this.router.navigate( [ 'manufacturers' ] );
  }

}
