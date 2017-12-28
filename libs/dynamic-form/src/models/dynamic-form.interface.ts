export enum DynamicFormElementType {
  group = 'group',
  hidden = 'hidden',
  text = 'text'
}

export interface AbstractDynamicFormElement {
  readonly type: DynamicFormElementType;
  readonly key: string;
}

export abstract class DynamicFormControlDef implements AbstractDynamicFormElement {
  readonly type: DynamicFormElementType;

  constructor( public readonly key: string,
               public readonly label?: string,
               public readonly description?: string,
               public readonly placeholder?: string,
               public readonly required?: boolean ) {
  }
}

export class DynamicFormHiddenControlDef implements AbstractDynamicFormElement {
  readonly type = DynamicFormElementType.hidden;

  constructor( public readonly key: string ) {
  }
}

export class DynamicFormTextControlDef extends DynamicFormControlDef {
  readonly type = DynamicFormElementType.text;
}

export class DynamicFormGroupDef implements AbstractDynamicFormElement {
  readonly type = DynamicFormElementType.group;

  constructor( public readonly key = '',
               public readonly label?: string,
               public readonly members: Array<AbstractDynamicFormElement> = [] ) {
  }
}
