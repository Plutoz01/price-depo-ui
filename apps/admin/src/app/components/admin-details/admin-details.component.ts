import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { DynamicFormGroupDef } from "@price-depo-ui/dynamic-form/src/models/dynamic-form.interface";
import { MasterDetailsRouterData } from "apps/admin/src/app/models/master-details-router-data.interface";
import { Identifiable } from "libs/data-handling/src/models/identifiable.interface";
import { Observable } from "rxjs/Observable";
import { DeleteAction, SaveAction } from "../../+state/admin.actions";
import { AdminDataType } from "../../models/admin-data-type.enum";
import { DynamicFormDefHttpRepository } from "../../services/dynamic-form-def.http.repository";

@Component( {
  selector: 'pd-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: [ './admin-details.component.scss' ]
} )
export class AdminDetailsPageComponent<T extends Identifiable<any>> {

  readonly formDefinition$: Observable<DynamicFormGroupDef>;
  readonly item$: Observable<T>;
  readonly adminDataType: AdminDataType;

  constructor( private store: Store<any>,
               private router: Router,
               readonly dynamicFormDefHttpRepository: DynamicFormDefHttpRepository,
               private readonly route: ActivatedRoute ) {
    const options: MasterDetailsRouterData<T> = route.snapshot.data.masterDetails;

    if ( !options ) {
      throw new Error( 'MasterDetailsRouterData is required, but missing' );
    }
    this.adminDataType = options.dataType;
    const masterDetailsStore = this.store.select( options.masterDetailsStateSelector );
    this.item$ = masterDetailsStore.select( 'selected' );

    // TODO: get form Def from state instead of direct service call
    this.formDefinition$ = dynamicFormDefHttpRepository.getById( options.formDefinitionId );
  }

  onSave( saveable: T ) {
    this.store.dispatch( new SaveAction( this.adminDataType, saveable ) );
  }

  onDelete( deletable: T ) {
    this.store.dispatch( new DeleteAction( this.adminDataType, deletable ) );
  }

  onNavigateBack() {
    this.router.navigate( [ '../' ], { relativeTo: this.route } );
  }

}
