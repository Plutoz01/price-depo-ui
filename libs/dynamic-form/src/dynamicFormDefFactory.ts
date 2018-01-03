import { InjectionToken } from "@angular/core";
import { SearchProvider } from "@price-depo-ui/dynamic-form/src/models/search-provider.interface";
import {
  AbstractDynamicFormElement, DynamicFormControlDef, DynamicFormElementType, DynamicFormGroupDef,
  DynamicFormSearchableDropdownControlDef
} from "./models/dynamic-form.interface";

export module DynamicFormDefFactory {

  interface AbstractDynamicFormElementOpts {
    key?: string;
    label?: string;
  }

  interface GroupDefOpts extends AbstractDynamicFormElementOpts {
    members?: AbstractDynamicFormElement[];
  }

  interface FormControlDefOpts extends AbstractDynamicFormElementOpts {
    description?: string;
    placeholder?: string;
    required?: boolean;
  }

  interface SearchableDropdownControlDefOpts extends FormControlDefOpts {
    readonly searchProviderToken: InjectionToken<SearchProvider<any, any, any>>;
    readonly displayKey?: string;
  }


  function buildDefaultControlDefWithType( type: DynamicFormElementType, options: FormControlDefOpts = {} ): DynamicFormControlDef {
    return {
      ...options,
      type: type,
      key: options.key || 'id'
    };
  }

  export function buildGroupDef( options: GroupDefOpts = {} ): DynamicFormGroupDef {
    return {
      type: DynamicFormElementType.group,
      key: options.key || '',
      members: options.members || []
    };
  }

  export function buildTextControlDef( options: FormControlDefOpts = {} ): DynamicFormControlDef {
    return buildDefaultControlDefWithType( DynamicFormElementType.text, options );
  }

  export function buildHiddenControlDef( options: FormControlDefOpts = {} ): DynamicFormControlDef {
    return buildDefaultControlDefWithType( DynamicFormElementType.hidden, options );
  }

  export function buildSearchableDropdownDef( options: SearchableDropdownControlDefOpts ): DynamicFormSearchableDropdownControlDef {
    return {
      ...buildDefaultControlDefWithType( DynamicFormElementType.searchableDropdown, options ),
      searchProviderToken: options.searchProviderToken,
      displayKey: options.displayKey
    };
  }


}
