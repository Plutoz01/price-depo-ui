import { MasterDetailsState } from "@price-depo-ui/data-handling/src/+state/master-details.state";
import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";
import { AdminAppState } from "../../+state/admin.interfaces";

export type ManufacturersState = MasterDetailsState<Manufacturer>;

export interface ManufacturersModuleState extends AdminAppState {
  readonly 'admin.manufacturers': ManufacturersState;
}
