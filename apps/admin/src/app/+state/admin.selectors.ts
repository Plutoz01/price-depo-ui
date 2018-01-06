import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AdminState } from "./admin.state";

export const getAdminAppStateSelector = createFeatureSelector( 'app' );

export const getManufacturerMasterDetailsStateSelector = createSelector( getAdminAppStateSelector,
  ( state: AdminState ) => state.manufacturers );

export const getChainStoreMasterDetailsStateSelector = createSelector( getAdminAppStateSelector,
  ( state: AdminState ) => state.chainStores );

export const getShopMasterDetailsStateSelector = createSelector( getAdminAppStateSelector,
  ( state: AdminState ) => state.shops );

export const getProductMasterDetailsStateSelector = createSelector( getAdminAppStateSelector,
  ( state: AdminState ) => state.products );

