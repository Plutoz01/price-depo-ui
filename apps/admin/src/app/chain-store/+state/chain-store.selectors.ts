import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MasterDetailsSelectors } from "@price-depo-ui/data-handling/src/+state/master-details/master-details.selectors";
import { ChainStore } from "@price-depo-ui/product/src/models/chain-store.interface";

export const getChainStoreStateSelector = createFeatureSelector( 'admin_chain_stores' );
export const getAllChainStoresSelector = createSelector( getChainStoreStateSelector,
  MasterDetailsSelectors.getItems<ChainStore>() );
export const getSelectedChainStoreSelector = createSelector( getChainStoreStateSelector,
  MasterDetailsSelectors.getSelectedItem<ChainStore>() );
export const getChainStorePaginationSelector = createSelector( getChainStoreStateSelector,
  MasterDetailsSelectors.getPaginationInfo() );
