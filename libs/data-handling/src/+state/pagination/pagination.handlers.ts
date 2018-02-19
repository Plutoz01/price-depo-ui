import { PaginationInfo } from '../../models/pagination-info.interface';
import { PaginationState } from '../pagination/pagination.state';

export function handlePaginationChange( state: PaginationState, paginationInfo: PaginationInfo ): PaginationState {
  return {
    ...state,
    pageNumber: paginationInfo.pageNumber,
    pageSize: paginationInfo.pageSize,
    hasNextPage: paginationInfo.hasNextPage,
    hasPreviousPage: paginationInfo.hasPreviousPage,
    totalPages: paginationInfo.totalPages,
    totalItems: paginationInfo.totalItems
  };
}
