import { PaginationInfo } from '@price-depo-ui/data-handling';

export function emptyPaginationInfo(): PaginationInfo {
  return {
    pageNumber: 0,
    pageSize: 0,
    hasNextPage: false,
    hasPreviousPage: false,
    totalPages: 0,
    totalItems: 0
  };
}
