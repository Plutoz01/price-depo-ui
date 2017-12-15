export interface FormElementDefinition {
  key: string;
  // TODO: convert to enum
  type: string;
  readonly?: boolean;
  label: string;
  description?: string;
  placeholder?: string;
  required?: boolean;
}
