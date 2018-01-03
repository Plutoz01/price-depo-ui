import { InjectionToken } from "@angular/core";
import { FilterableRepository } from "@price-depo-ui/data-handling/src/repositories/filterable-repository.interface";

export enum DynamicFormElementType {
  group = 'group',
  hidden = 'hidden',
  text = 'text',
  filterableDropdown = 'filterableDropdown'
}

export interface AbstractDynamicFormElement {
  readonly type: DynamicFormElementType;
  readonly key: string;
  readonly label?: string;
}

export interface DynamicFormControlDef extends AbstractDynamicFormElement {
  readonly description?: string;
  readonly placeholder?: string;
  readonly required?: boolean;
}

export interface DynamicFormGroupDef extends AbstractDynamicFormElement {
  readonly members: AbstractDynamicFormElement[];
}

export interface  DynamicFormSearchableDropdownControlDef extends DynamicFormControlDef {
  readonly filterableProviderToken: InjectionToken<FilterableRepository<any, any>>;
  readonly displayKey?: string;
}
