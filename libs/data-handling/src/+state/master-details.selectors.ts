import { MasterDetailsState } from "./master-details.state";
import { Identifiable } from "../models/identifiable.interface";

export class MasterDetailsSelectors {

  static getItemsFromMasterDetailsState<M extends Identifiable<any>>(): ( s: MasterDetailsState<M> ) => M[] {
    return ( state: MasterDetailsState<M> ): M[] => state.items;
  }

  static getSelectedItem<M extends Identifiable<any>>(): ( s: MasterDetailsState<M> ) => M {
    return ( state: MasterDetailsState<M> ) => state.selected;
  }
}
