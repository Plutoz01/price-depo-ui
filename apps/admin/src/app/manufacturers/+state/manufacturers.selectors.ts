import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MasterDetailsSelectors } from "@price-depo-ui/data-handling/src/+state/master-details/master-details.selectors";
import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";

export const getManufacturersStateSelector = createFeatureSelector( 'admin_manufacturers' );
export const getManufacturersSelector = createSelector( getManufacturersStateSelector,
  MasterDetailsSelectors.getItems<Manufacturer>() );
export const getManufacturerSelector = createSelector( getManufacturersStateSelector,
  MasterDetailsSelectors.getSelectedItem<Manufacturer>() );
export const getManufacturerPaginationSelector = createSelector( getManufacturersStateSelector,
  MasterDetailsSelectors.getPaginationInfo() );

