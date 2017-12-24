import { Identifiable } from "libs/data-handling/src/models/identifiable.interface";

export interface MasterDetailsState<M extends Identifiable<any>> {
  items: M[];
  selected?: M;
}
