import { Identifiable } from '../../models/identifiable.interface';
import { PaginationState } from '../pagination/pagination.state';

export interface MasterDetailsState<M extends Identifiable<any>> {
  readonly items: M[];
  readonly selected?: M;
  readonly pagination: PaginationState;
}
