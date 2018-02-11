import { PaginationState } from "../pagination/pagination.state";
import { Identifiable } from "../../models/identifiable.interface";

export interface MasterDetailsState<M extends Identifiable<any>> {
  readonly items: M[];
  readonly selected?: M;
  readonly pagination: PaginationState;
}
