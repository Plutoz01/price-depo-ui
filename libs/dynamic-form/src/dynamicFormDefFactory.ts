import {
  AbstractDynamicFormElement, DynamicFormControlDef, DynamicFormElementType,
  DynamicFormGroupDef
} from "./models/dynamic-form.interface";

export module DynamicFormDefFactory {

  interface AbstractDynamicFormElementOpts {
    key?: string;
    label?: string;
  }

  interface DynamicFormGroupDefOpts extends AbstractDynamicFormElementOpts {
    members?: AbstractDynamicFormElement[];
  }

  interface DynamicFormControlDefOpts extends AbstractDynamicFormElementOpts {
    description?: string;
    placeholder?: string;
    required?: boolean;
  }

  function buildDefaultControlDefWithType( type: DynamicFormElementType, options: DynamicFormControlDefOpts = {} ): DynamicFormControlDef {
    return {
      ...options,
      type: type,
      key: options.key || 'id'
    };
  }

  export function buildGroupDef( options: DynamicFormGroupDefOpts = {} ): DynamicFormGroupDef {
    return {
      type: DynamicFormElementType.group,
      key: options.key || '',
      members: options.members || []
    };
  }

  export function buildTextControlDef( options: DynamicFormControlDefOpts = {} ): DynamicFormControlDef {
    return buildDefaultControlDefWithType( DynamicFormElementType.text, options );
  }

  export function buildHiddenControlDef( options: DynamicFormControlDefOpts = {} ): DynamicFormControlDef {
    return buildDefaultControlDefWithType( DynamicFormElementType.hidden, options );
  }


}
