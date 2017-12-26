import { PaginationState } from "@price-depo-ui/data-handling/src/+state/pagination/pagination.state";
import { Identifiable } from "libs/data-handling/src/models/identifiable.interface";

export interface MasterDetailsState<M extends Identifiable<any>> {
  readonly items: M[];
  readonly selected?: M;
  readonly pagination: PaginationState;
}
