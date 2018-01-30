import { Identifiable } from "@price-depo-ui/data-handling/src/models/identifiable.interface";

export enum DynamicFormElementType {
  group = 'group',
  hidden = 'hidden',
  text = 'text',
  searchableDropdown = 'searchableDropdown',
  predefinedMultiSelect = 'predefinedMultiSelect'
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

export interface DynamicFormDef extends Identifiable<string>, DynamicFormGroupDef {
}

export interface SearchableDropdownControlDef extends DynamicFormControlDef {
  readonly searchProviderName: string;
  readonly displayKey?: string;
}

export interface PredefinedMultiSelectControlDef extends DynamicFormControlDef {
  options: string[];
}
