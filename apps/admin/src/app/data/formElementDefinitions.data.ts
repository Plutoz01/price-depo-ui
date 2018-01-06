import { DynamicFormDefFactory } from "@price-depo-ui/dynamic-form/src/dynamicFormDefFactory";
import { chainStoreSearchProviderToken, manufacturerSearchProviderToken } from "../tokens/search-provider.tokens";

export const manufacturerFormDefinition = DynamicFormDefFactory.buildGroupDef( {
  members: [
    DynamicFormDefFactory.buildHiddenControlDef( { key: 'id' } ),
    DynamicFormDefFactory.buildTextControlDef( {
      key: 'name',
      label: 'Name',
      placeholder: 'Enter manufacturer name',
      required: true
    } ),
    DynamicFormDefFactory.buildTextControlDef( {
      key: 'country',
      label: 'Country',
      placeholder: 'Enter country of manufacturer',
      description: 'Please add full name of country',
      required: true
    } ),
  ]
} );

export const chainStoreFormDefinition = DynamicFormDefFactory.buildGroupDef( {
  members: [
    DynamicFormDefFactory.buildHiddenControlDef( { key: 'id' } ),
    DynamicFormDefFactory.buildTextControlDef( {
      key: 'name',
      label: 'Name',
      placeholder: 'Enter chain store name',
      required: true
    } ),
    DynamicFormDefFactory.buildTextControlDef( {
      key: 'website',
      label: 'Website',
      placeholder: 'Enter website URL',
      description: 'Please use http:// or https:// prefixes',
      required: true
    } ),
  ]
} );

export const shopFormDefinition = DynamicFormDefFactory.buildGroupDef( {
  members: [
    DynamicFormDefFactory.buildHiddenControlDef( { key: 'id' } ),
    DynamicFormDefFactory.buildTextControlDef( {
      key: 'name',
      label: 'Name',
      placeholder: 'Enter shop name',
      required: true
    } ),
    DynamicFormDefFactory.buildSearchableDropdownDef( {
      key: 'chainStoreId',
      label: 'Chain store',
      placeholder: 'Please select a chain store',
      displayKey: 'name',
      searchProviderToken: chainStoreSearchProviderToken
    } ),
    DynamicFormDefFactory.buildGroupDef( {
      key: 'address',
      label: 'Address',
      members: [
        DynamicFormDefFactory.buildTextControlDef( {
          key: 'country',
          label: 'Country',
          placeholder: 'Enter country',
          required: true
        } ),
        DynamicFormDefFactory.buildTextControlDef( {
          key: 'postCode',
          label: 'Post code',
          placeholder: 'Enter post code',
          required: true
        } ),
        DynamicFormDefFactory.buildTextControlDef( {
          key: 'settlement',
          label: 'Settlement',
          placeholder: 'Enter settlement',
          required: true
        } ),
        DynamicFormDefFactory.buildTextControlDef( {
          key: 'street',
          label: 'Street',
          placeholder: 'Enter street',
          required: true
        } ),
        DynamicFormDefFactory.buildTextControlDef( {
          key: 'number',
          label: 'House number',
          placeholder: 'Enter house number',
          required: true
        } ),
      ]
    } )
  ]
} );

export const productFormDefinition = DynamicFormDefFactory.buildGroupDef( {
  members: [
    DynamicFormDefFactory.buildHiddenControlDef( { key: 'id' } ),
    DynamicFormDefFactory.buildTextControlDef( {
      key: 'name',
      label: 'Name',
      placeholder: 'Enter product name',
      required: true
    } ),
    DynamicFormDefFactory.buildSearchableDropdownDef( {
      key: 'manufacturerId',
      label: 'Manufacturer',
      placeholder: 'Please select a manufacturer',
      displayKey: 'name',
      searchProviderToken: manufacturerSearchProviderToken
    } ),
    DynamicFormDefFactory.buildTextControlDef( {
      key: 'barcode',
      label: 'Barcode',
      placeholder: 'Enter product barcode',
      required: false
    } ),
  ]
});
