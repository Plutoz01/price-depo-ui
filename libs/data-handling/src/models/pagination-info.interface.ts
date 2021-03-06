export interface PaginationInfo {
  readonly pageNumber: number;
  readonly pageSize: number;
  readonly hasNextPage: boolean;
  readonly hasPreviousPage: boolean;
  readonly totalPages: number;
  readonly totalItems: number;
}
