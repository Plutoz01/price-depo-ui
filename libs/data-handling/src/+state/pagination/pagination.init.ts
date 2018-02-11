import { PaginationState } from './pagination.state';
import { Pageable } from '../../models/pageable.class';

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
