import { Identifiable } from "libs/data-handling/src/models/identifiable.interface";

export interface MasterDetailsState<M extends Identifiable<any>> {
  readonly items: M[];
  readonly selected?: M;
  readonly pageNumber: number;
  readonly pageSize: number;
  readonly hasNextPage: boolean;
  readonly hasPreviousPage: boolean;
  readonly totalPages: number;
  readonly totalItems: number;
}
