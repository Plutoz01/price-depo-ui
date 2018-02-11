import { Selector, State } from '@ngrx/store';
import { Identifiable, MasterDetailsState } from '@price-depo-ui/data-handling';
import { ColumnDefinition } from '@price-depo-ui/shared';

import { AdminDataType } from './admin-data-type.enum';

export interface MasterDetailsRouterData<T extends Identifiable<any>> {
  readonly dataType: AdminDataType;
  readonly title: string;
  readonly columnDefinitions: ColumnDefinition[];
  readonly formDefId: string;
  readonly masterDetailsStateSelector: Selector<State<any>, MasterDetailsState<T>>;
  readonly initialValue: T;
}
