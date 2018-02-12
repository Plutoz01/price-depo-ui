import { PaginationInfo } from '../models/pagination-info.interface';

export interface PagedResponse<T> extends PaginationInfo {
  readonly content: T[];
  readonly pageNumber: number;
  readonly pageSize: number;
  readonly hasNextPage: boolean;
  readonly hasPreviousPage: boolean;
  readonly totalPages: number;
  readonly totalItems: number;
}
