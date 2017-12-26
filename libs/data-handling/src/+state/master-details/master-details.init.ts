import { MasterDetailsState } from "@price-depo-ui/data-handling/src/+state/master-details/master-details.state";
import { Pageable } from "@price-depo-ui/data-handling/src/models/pageable.class";

export function createMasterDetailsInitialState(): MasterDetailsState<any> {
  return {
    items: [],
    selected: null,
    pageNumber: 0,
    pageSize: Pageable.defaultPageSize,
    hasNextPage: false,
    hasPreviousPage: false,
    totalPages: 0,
    totalItems: 0
  };
}
