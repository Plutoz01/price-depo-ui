import { PaginationState } from "@price-depo-ui/data-handling/src/+state/pagination/pagination.state";
import { PaginationInfo } from "@price-depo-ui/data-handling/src/models/pagination-info.interface";

export function handlePaginationChange( state: PaginationState, paginationInfo: PaginationInfo ): PaginationState {
  return {
    ...state,
    pageNumber: paginationInfo.pageNumber,
    pageSize: paginationInfo.pageSize,
    hasNextPage: paginationInfo.hasNextPage,
    hasPreviousPage: paginationInfo.hasPreviousPage,
    totalPages: paginationInfo.totalPages,
    totalItems: paginationInfo.totalItems,
  };

}
