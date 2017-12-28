import { MasterDetailsState } from "@price-depo-ui/data-handling/src/+state/master-details/master-details.state";
import { ChainStore } from "@price-depo-ui/product/src/models/chain-store.interface";
import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";

export interface AdminState {
  manufacturers: MasterDetailsState<Manufacturer>;
  chainStores: MasterDetailsState<ChainStore>;
}

export interface AdminAppState {
  readonly app: AdminState;
}
