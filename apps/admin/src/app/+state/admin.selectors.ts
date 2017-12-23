import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AdminState } from "./admin.interfaces";

function getManufacturers( state: AdminState ) {
  return state.manufacturers;
}

export const getAdminStateSelector = createFeatureSelector<AdminState>( 'admin' );
export const getManufacturersSelector = createSelector( getAdminStateSelector, getManufacturers );
