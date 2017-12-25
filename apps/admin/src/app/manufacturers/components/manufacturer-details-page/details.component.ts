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
  templateUrl: './details.component.html',
  styleUrls: [ './details.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ManufacturerDetailsPageComponent {

  readonly formElementDefinitions: FormElementDefinition[] = [
    { key: 'name', label: 'Name', type: 'text', placeholder: 'Enter manufacturer name', required: true },
    {
      key: 'country', label: 'Country', type: 'text', placeholder: 'Enter country of manufacturer',
      description: 'Please add full name of country'
    }
  ];

  readonly item$: Observable<Manufacturer>;

  constructor( private store: Store<AdminAppState>, private router: Router ) {
    this.item$ = store.select( getManufacturerSelector );
  }

  onSave( saveable: Manufacturer ) {
    this.store.dispatch( new SaveManufacturerAction( saveable ) );
  }

  onDelete( deletable: Manufacturer ) {
    this.store.dispatch( new DeleteManufacturerAction( deletable ) );
  }

  onNavigateBack() {
    this.router.navigate( [ 'manufacturers' ] );
  }

}
