import { MasterDetailsState } from "@price-depo-ui/data-handling/src/+state/master-details/master-details.state";
import { ChainStore } from "@price-depo-ui/product/src/models/chain-store.interface";
import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";
import { Shop } from "@price-depo-ui/product/src/models/shop.interface";

export interface AdminState {
  manufacturers: MasterDetailsState<Manufacturer>;
  chainStores: MasterDetailsState<ChainStore>;
  shops: MasterDetailsState<Shop>;
}

export interface AdminAppState {
  readonly app: AdminState;
}
