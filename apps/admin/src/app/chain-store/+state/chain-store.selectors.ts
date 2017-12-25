import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MasterDetailsSelectors } from "@price-depo-ui/data-handling/src/+state/master-details.selectors";
import { ChainStore } from "@price-depo-ui/product/src/models/chain-store.interface";


export const getChainStoreStateSelector = createFeatureSelector( 'admin.chain-stores' );
export const getAllChainStoresSelector = createSelector( getChainStoreStateSelector,
  MasterDetailsSelectors.getItemsFromMasterDetailsState<ChainStore>() );
export const getSelectedChainStoreSelector = createSelector( getChainStoreStateSelector,
  MasterDetailsSelectors.getSelectedItem<ChainStore>() );
