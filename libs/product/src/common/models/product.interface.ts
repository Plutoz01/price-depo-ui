export interface Product {
  id: string;
  name: string;
  unit: string;
  quantity: number;
  // TODO: replace to Manufacturer model
  manufacturer: string;
}
