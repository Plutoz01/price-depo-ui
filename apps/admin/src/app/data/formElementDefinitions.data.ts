import { DynamicFormDefFactory } from "@price-depo-ui/dynamic-form/src/dynamicFormDefFactory";
import { filterableChainStoreProviderToken } from "../tokens/filterable-provider.tokens";

export const manufacturerFormDefinition = DynamicFormDefFactory.buildGroupDef( {
  members: [
    DynamicFormDefFactory.buildHiddenControlDef( { key: 'id' } ),
    DynamicFormDefFactory.buildTextControlDef( {
      key: 'name',
      label: 'Name',
      placeholder: 'Enter manufacturer name'
    } ),
    DynamicFormDefFactory.buildTextControlDef( {
      key: 'country',
      label: 'Country',
      placeholder: 'Enter country of manufacturer',
      description: 'Please add full name of country'
    } ),
  ]
} );

export const chainStoreFormDefinition = DynamicFormDefFactory.buildGroupDef( {
  members: [
    DynamicFormDefFactory.buildHiddenControlDef( { key: 'id' } ),
    DynamicFormDefFactory.buildTextControlDef( {
      key: 'name',
      label: 'Name',
      placeholder: 'Enter chain store name'
    } ),
    DynamicFormDefFactory.buildTextControlDef( {
      key: 'website',
      label: 'Website',
      placeholder: 'Enter website URL',
      description: 'Please use http:// or https:// prefixes'
    } ),
  ]
} );

export const shopFormDefinition = DynamicFormDefFactory.buildGroupDef( {
  members: [
    DynamicFormDefFactory.buildHiddenControlDef( { key: 'id' } ),
    DynamicFormDefFactory.buildTextControlDef( {
      key: 'name',
      label: 'Name',
      placeholder: 'Enter shop name'
    } ),
    DynamicFormDefFactory.buildGroupDef( {
      key: 'address',
      label: 'Address',
      members: [
        DynamicFormDefFactory.buildTextControlDef( {
          key: 'country',
          label: 'Country',
          placeholder: 'Enter country'
        } ),
        DynamicFormDefFactory.buildTextControlDef( {
          key: 'postCode',
          label: 'Post code',
          placeholder: 'Enter post code'
        } ),
        DynamicFormDefFactory.buildTextControlDef( {
          key: 'settlement',
          label: 'Settlement',
          placeholder: 'Enter settlement'
        } ),
        DynamicFormDefFactory.buildTextControlDef( {
          key: 'street',
          label: 'Street',
          placeholder: 'Enter street'
        } ),
        DynamicFormDefFactory.buildTextControlDef( {
          key: 'number',
          label: 'House number',
          placeholder: 'Enter house number'
        } ),
      ]
    } ),
    DynamicFormDefFactory.buildSearchableDropdownDef( {
      key: 'chainStoreId',
      label: 'Chain store',
      placeholder: 'Please select a chain store',
      displayKey: 'name',
      filterableProviderToken: filterableChainStoreProviderToken
    } )
  ]
} );
