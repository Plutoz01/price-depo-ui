import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";
import { AdminAppState } from "../../+state/admin.interfaces";
import { MasterDetailsState } from "../../../../../../libs/data-handling/src/models/master-details-state.interface";

export type ManufacturersState = MasterDetailsState<Manufacturer>;

export interface ManufacturersModuleState extends AdminAppState {
  readonly 'admin.manufacturers': ManufacturersState;
}
