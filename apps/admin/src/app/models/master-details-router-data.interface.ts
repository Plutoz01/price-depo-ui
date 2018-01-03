import { Selector, State } from "@ngrx/store";
import { DynamicFormGroupDef } from "@price-depo-ui/dynamic-form/src/models/dynamic-form.interface";
import { MasterDetailsState } from "libs/data-handling/src/+state/master-details/master-details.state";
import { Identifiable } from "libs/data-handling/src/models/identifiable.interface";
import { ColumnDefinition } from "libs/shared/src/models/column-definition.interface";
import { AdminDataType } from "./admin-data-type.enum";

export interface MasterDetailsRouterData<T extends Identifiable<any>> {
  readonly dataType: AdminDataType;
  readonly title: string;
  readonly columnDefinitions: ColumnDefinition[];
  readonly formDefinition: DynamicFormGroupDef;
  readonly masterDetailsStateSelector: Selector<State<any>, MasterDetailsState<T>>;
  readonly initialValue: T;
}
