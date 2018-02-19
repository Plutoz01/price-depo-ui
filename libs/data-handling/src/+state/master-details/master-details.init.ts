import { createPaginationInitialState } from '../pagination/pagination.init';
import { MasterDetailsState } from './master-details.state';

export function createMasterDetailsInitialState(): MasterDetailsState<any> {
  return {
    items: [],
    selected: null,
    pagination: createPaginationInitialState()
  };
}
