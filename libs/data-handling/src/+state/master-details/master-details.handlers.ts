import { handlePaginationChange } from "@price-depo-ui/data-handling/src/+state/pagination/pagination.handlers";
import { MasterDetailsState } from "./master-details.state";
import { LoadAllSuccessAction, LoadByIdSuccessAction } from "../crud-state-base.actions";
import { Identifiable } from "../../models/identifiable.interface";

export function handleMasterDetailsLoadAllSuccess<M extends Identifiable<any>>( state: MasterDetailsState<M>,
                                                                                action: LoadAllSuccessAction<M> ): MasterDetailsState<M> {
  return {
    ...state,
    items: action.pagedResponse.content,
    pagination: handlePaginationChange( state.pagination, action.pagedResponse ),
    selected: null
  };
}

export function handleMasterDetailsLoadByIdSuccess<M extends Identifiable<any>>( state: MasterDetailsState<M>,
                                                                                 action: LoadByIdSuccessAction<M> ): MasterDetailsState<M> {
  return {
    ...state,
    selected: action.loadedItem
  };
}
