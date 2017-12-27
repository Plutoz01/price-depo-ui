import { Selector, State } from "@ngrx/store";
import { FormElementDefinition } from "@price-depo-ui/shared/src/models/form-element-definition.inteface";
import { MasterDetailsState } from "libs/data-handling/src/+state/master-details/master-details.state";
import { Identifiable } from "libs/data-handling/src/models/identifiable.interface";
import { ColumnDefinition } from "libs/shared/src/models/column-definition.interface";
import { AdminDataType } from "./admin-data-type.enum";

export interface MasterDetailsRouterData<T extends Identifiable<any>> {
  readonly dataType: AdminDataType;
  readonly title: string;
  readonly columnDefinitions: ColumnDefinition[];
  readonly formElementDefinitions: FormElementDefinition[];
  readonly masterDetailsStateSelector: Selector<State<any>, MasterDetailsState<T>>;
  readonly initialValue: T;
}
