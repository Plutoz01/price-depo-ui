import { Injectable } from "@angular/core";
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import {
  AbstractDynamicFormElement, DynamicFormControlDef, DynamicFormElementType,
  DynamicFormGroupDef
} from "@price-depo-ui/dynamic-form/src/models/dynamic-form.interface";
import * as _ from 'lodash';

@Injectable()
export class DynamicFormFactory {

  constructor( private formBuilder: FormBuilder ) {
  }

  buildFormGroup( formGroupDef: DynamicFormGroupDef, initialValue: Object = {} ): FormGroup {
    return new FormGroup(
      formGroupDef.members.reduce( ( partial, currentDef: AbstractDynamicFormElement ): Object => {
        const actualValue = _.get( initialValue, currentDef.key );

        return {
          ...partial,
          [ currentDef.key ]: this.buildControlByDefType( currentDef, actualValue )
        };
      }, {} )
    );
  }

  protected buildControlByDefType( def: AbstractDynamicFormElement, value: any ): AbstractControl {
    switch ( def.type ) {
      case DynamicFormElementType.group:
        return this.buildFormGroup( <DynamicFormGroupDef>def, value );
      case DynamicFormElementType.text:
        return this.buildFormTextItem( def, value );
      case DynamicFormElementType.hidden:
        return this.buildHiddenItem( def, value );
      default:
        throw new Error( 'unhandled formItemDef type: ' + def.type );
    }
  }

  buildFormTextItem( formTextItemDef: DynamicFormControlDef, initialValue: any ): FormControl {
    const validators: ValidatorFn[] = [];
    if ( formTextItemDef.required ) {
      validators.push( Validators.required );
    }
    return this.formBuilder.control( initialValue, validators );
  }

  buildHiddenItem( hiddenItemDef: DynamicFormControlDef, initialValue: any ): FormControl {
    return this.formBuilder.control( initialValue );
  }
}
