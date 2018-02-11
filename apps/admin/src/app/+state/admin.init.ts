import { createMasterDetailsInitialState } from "@price-depo-ui/data-handling";
import { AdminState, AdminAppState } from './admin.state';

export const adminInitialState: AdminState = {
  manufacturers: createMasterDetailsInitialState(),
  chainStores: createMasterDetailsInitialState(),
  shops: createMasterDetailsInitialState(),
  products: createMasterDetailsInitialState(),
  formDef: null
};

export const appInitialState: AdminAppState = {
  app: adminInitialState
};
