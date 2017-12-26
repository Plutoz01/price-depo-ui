import { MasterDetailsState } from "@price-depo-ui/data-handling/src/+state/master-details/master-details.state";
import { createPaginationInitialState } from "@price-depo-ui/data-handling/src/+state/pagination/pagination.init";

export function createMasterDetailsInitialState(): MasterDetailsState<any> {
  return {
    items: [],
    selected: null,
    pagination: createPaginationInitialState()
  };
}
