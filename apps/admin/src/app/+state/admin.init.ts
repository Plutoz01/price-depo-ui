import { AdminState, AppState } from './admin.interfaces';

export const adminInitialState: AdminState = {
  manufacturers: [],
  selectedManufacturer: null
};

export const appInitialState: AppState = {
  admin: adminInitialState
};
