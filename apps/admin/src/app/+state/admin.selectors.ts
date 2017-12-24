import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";
import { AdminState } from "./admin.interfaces";

function getManufacturers( state: AdminState ): Manufacturer[] {
  return state.manufacturers;
}
function getSelectedManufacturer( state: AdminState ): Manufacturer {
  return state.selectedManufacturer;
}

export const getAdminStateSelector = createFeatureSelector<AdminState>( 'admin' );
export const getManufacturersSelector = createSelector( getAdminStateSelector, getManufacturers );
export const getManufacturerSelector = createSelector( getAdminStateSelector, getSelectedManufacturer );

