import { FormElementDefinition } from "@price-depo-ui/shared/src/models/form-element-definition.inteface";

export const manufacturerFormElementDefinitions: FormElementDefinition[] = [
  { key: 'name', label: 'Name', type: 'text', placeholder: 'Enter manufacturers name', required: true },
  {
    key: 'country', label: 'Country', type: 'text', placeholder: 'Enter country of manufacturers',
    description: 'Please add full name of country'
  }
];

export const chainStoreFormElementDefinitions: FormElementDefinition[] = [
  { key: 'name', label: 'Name', type: 'text', placeholder: 'Enter chain store name', required: true },
  {
    key: 'website', label: 'Website', type: 'text', placeholder: 'Enter website of chain store',
    description: 'Please use http:// or https:// prefix'
  }
];

export const shopFormElementDefinitions: FormElementDefinition[] = [
  { key: 'name', label: 'Name', type: 'text', placeholder: 'Enter shop name', required: true }
];
