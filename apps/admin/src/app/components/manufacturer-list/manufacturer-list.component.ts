import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Manufacturer } from "libs/product/src/models/manufacturer.interface";
import { ColumnDefinition } from "libs/shared/src/models/column-definition.interface";
import { Observable } from "rxjs/Observable";
import { AppState } from "../../+state/admin.interfaces";
import { getManufacturersSelector } from "../../+state/admin.selectors";

@Component( {
  selector: 'pd-manufacturer-admin',
  templateUrl: './manufacturer-list.component.html',
  styleUrls: [ './manufacturer-list.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ManufacturerListComponent {

  readonly manufacturerColumns: ColumnDefinition[] = [
    { name: 'name', headerText: 'Name' },
    { name: 'country', headerText: 'Country' }
  ];

  readonly manufacturers$: Observable<Manufacturer[]>;

  constructor( private store: Store<AppState>, private router: Router ) {
    this.manufacturers$ = store.select( getManufacturersSelector );
  }

  onSelect( manufacturer: Manufacturer ) {
    this.router.navigate( [ 'manufacturers', manufacturer ? manufacturer.id : undefined ] );
  }
}
