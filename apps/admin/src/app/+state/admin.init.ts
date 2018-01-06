import { createMasterDetailsInitialState } from "@price-depo-ui/data-handling/src/+state/master-details/master-details.init";
import { AdminState, AdminAppState } from './admin.state';

export const adminInitialState: AdminState = {
  manufacturers: createMasterDetailsInitialState(),
  chainStores: createMasterDetailsInitialState(),
  shops: createMasterDetailsInitialState(),
  products: createMasterDetailsInitialState()
};

export const appInitialState: AdminAppState = {
  app: adminInitialState
};
