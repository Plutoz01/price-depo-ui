import { MasterDetailsState } from "@price-depo-ui/data-handling/src/+state/master-details.state";
import { AdminAppState } from "../../+state/admin.interfaces";
import { ChainStore } from "../../../../../../libs/product/src/models/chain-store.interface";

export type ChainStoreState = MasterDetailsState<ChainStore>;

export interface ChainStoreModuleState extends AdminAppState {
  readonly 'admin.chain-stores': ChainStoreState;
}
