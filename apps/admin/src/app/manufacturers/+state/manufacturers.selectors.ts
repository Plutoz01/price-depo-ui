import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";
import { ManufacturersState } from "./manufacturers.state";

function getManufacturers( state: ManufacturersState ): Manufacturer[] {
  return state.items;
}

function getSelectedManufacturer( state: ManufacturersState ): Manufacturer {
  return state.selected;
}

export const getManufacturersStateSelector = createFeatureSelector( 'admin.manufacturers' );
export const getManufacturersSelector = createSelector( getManufacturersStateSelector, getManufacturers );
export const getManufacturerSelector = createSelector( getManufacturersStateSelector, getSelectedManufacturer );
