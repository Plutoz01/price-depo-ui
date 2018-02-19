import { Pageable } from '../../models/pageable.class';
import { PaginationState } from './pagination.state';

export function createPaginationInitialState(): PaginationState {
  return {
    pageNumber: 0,
    pageSize: Pageable.defaultPageSize,
    hasNextPage: false,
    hasPreviousPage: false,
    totalPages: 0,
    totalItems: 0
  };
}
