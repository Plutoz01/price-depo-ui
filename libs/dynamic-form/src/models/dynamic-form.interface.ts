export enum DynamicFormElementType {
  group = 'group',
  hidden = 'hidden',
  text = 'text'
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
