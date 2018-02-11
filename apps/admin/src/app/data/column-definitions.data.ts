import { ColumnDefinition } from "@price-depo-ui/shared";

export const manufacturerColumnDefinitions: ColumnDefinition[] = [
  { path: 'name', headerText: 'Name' },
  { path: 'country', headerText: 'Country' }
];

export const chainStoreColumnDefinitions: ColumnDefinition[] = [
  { path: 'name', headerText: 'Name' },
  { path: 'website', headerText: 'Website' }
];

export const shopColumnDefinitions: ColumnDefinition[] = [
  { path: 'name', headerText: 'Name' },
  { path: 'address.country', headerText: 'Country' },
  { path: 'address.settlement', headerText: 'Settlement' }
];

export const productColumnDefinitions: ColumnDefinition[] = [
  { path: 'name', headerText: 'Name' },
  { path: 'barcode', headerText: 'Barcode' }
];
