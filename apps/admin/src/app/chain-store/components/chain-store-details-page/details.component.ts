import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { ChainStore } from "@price-depo-ui/product/src/models/chain-store.interface";
import { FormElementDefinition } from "libs/shared/src/models/form-element-definition.inteface";
import { Observable } from "rxjs/Observable";
import { DeleteChainStoreAction, SaveChainStoreAction } from "../../+state/chain-store.actions";
import { getSelectedChainStoreSelector } from "../../+state/chain-store.selectors";
import { ChainStoreModuleState } from "../../+state/chain-store.state";

@Component( {
  templateUrl: './details.component.html',
  styleUrls: [ './details.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class ChainStoreDetailsPageComponent {

  readonly formElementDefinitions: FormElementDefinition[] = [
    { key: 'name', label: 'Name', type: 'text', placeholder: 'Enter chain store name', required: true },
    {
      key: 'website', label: 'Website', type: 'text', placeholder: 'Enter website of chain store',
      description: 'Please use http:// or https:// prefix'
    }
  ];

  readonly item$: Observable<ChainStore>;

  constructor( private store: Store<ChainStoreModuleState>, private router: Router ) {
    this.item$ = store.select( getSelectedChainStoreSelector );
  }

  onSave( itemToSave: ChainStore ) {
    this.store.dispatch( new SaveChainStoreAction( itemToSave ) );
  }

  onDelete( itemToDelete: ChainStore ) {
    this.store.dispatch( new DeleteChainStoreAction( itemToDelete ) );
  }

  onNavigateBack() {
    this.router.navigate( [ 'chain-stores' ] );
  }

}
