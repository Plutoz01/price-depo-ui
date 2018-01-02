import {
  DynamicFormGroupDef, DynamicFormHiddenControlDef,
  DynamicFormTextControlDef
} from "@price-depo-ui/dynamic-form/src/models/dynamic-form.interface";

export const manufacturerFormDefinition = new DynamicFormGroupDef(
  'manufacturer',
  '',
  [
    new DynamicFormHiddenControlDef( 'id' ),
    new DynamicFormTextControlDef(
      'name',
      'Name',
      null,
      'Enter manufacturers name',
      true
    ),
    new DynamicFormTextControlDef(
      'country',
      'Country',
      'Please add full name of country',
      'Enter country of manufacturers',
      true
    )
  ]
);

export const chainStoreFormDefinition = new DynamicFormGroupDef(
  'chainStore',
  '',
  [
    new DynamicFormHiddenControlDef( 'id' ),
    new DynamicFormTextControlDef(
      'name',
      'Name',
      null,
      'Enter chain store name',
      true
    ),
    new DynamicFormTextControlDef(
      'website',
      'Website',
      'Please use http:// or https:// prefixes',
      'Enter website URL',
      true
    )
  ]
);

export const shopFormDefinition = new DynamicFormGroupDef(
  'shop',
  '',
  [
    new DynamicFormHiddenControlDef( 'id' ),
    new DynamicFormTextControlDef(
      'name',
      'Name',
      null,
      'Enter shop name',
      true
    ),
    new DynamicFormGroupDef(
      'address',
      'Address',
      [
        new DynamicFormTextControlDef(
          'country',
          'Country',
          null,
          'Enter country',
          true
        ),
        new DynamicFormTextControlDef(
          'postCode',
          'Postcode',
          null,
          'Enter post code',
          true
        ),
        new DynamicFormTextControlDef(
          'settlement',
          'Settlement',
          null,
          'Enter settlement',
          true
        ),
        new DynamicFormTextControlDef(
          'street',
          'Street',
          null,
          'Enter street',
          true
        ),
        new DynamicFormTextControlDef(
          'number',
          'House number',
          null,
          'Enter house number',
          true
        )
      ]
    )
  ]
);
