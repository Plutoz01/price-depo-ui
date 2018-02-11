import { MasterDetailsState } from "./master-details.state";
import { createPaginationInitialState } from "../pagination/pagination.init";

export function createMasterDetailsInitialState(): MasterDetailsState<any> {
  return {
    items: [],
    selected: null,
    pagination: createPaginationInitialState()
  };
}
