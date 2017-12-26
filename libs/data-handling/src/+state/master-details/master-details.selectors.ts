import { PaginationInfo } from "@price-depo-ui/data-handling/src/models/pagination-info.interface";
import { MasterDetailsState } from "./master-details.state";
import { Identifiable } from "../../models/identifiable.interface";

export class MasterDetailsSelectors {

  static getItems<M extends Identifiable<any>>(): ( s: MasterDetailsState<M> ) => M[] {
    return ( state: MasterDetailsState<M> ): M[] => state.items;
  }

  static getSelectedItem<M extends Identifiable<any>>(): ( s: MasterDetailsState<M> ) => M {
    return ( state: MasterDetailsState<M> ) => state.selected;
  }

  static getPaginationInfo(): ( state: MasterDetailsState<any> ) => PaginationInfo {
    return ( state: MasterDetailsState<any> ) => state.pagination;
  }
}
