import { InjectionToken } from "@angular/core";
import { SearchProvider } from "@price-depo-ui/dynamic-form/src/models/search-provider.interface";

export enum DynamicFormElementType {
  group = 'group',
  hidden = 'hidden',
  text = 'text',
  searchableDropdown = 'searchableDropdown'
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

export interface DynamicFormSearchableDropdownControlDef extends DynamicFormControlDef {
  readonly searchProviderToken: InjectionToken<SearchProvider<any, any, any>>;
  readonly displayKey?: string;
}
