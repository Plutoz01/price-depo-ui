import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PredefinedMultiSelectControlDef } from '../../models/dynamic-form.interface';
import * as _ from 'lodash';

// TODO: validation functionality is missing
@Component({
  selector: 'pd-dynamic-form-predefined-multi-select',
  templateUrl: './predefined-multi-select.component.html',
  styleUrls: ['./predefined-multi-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef( () => DynamicFormPredefinedMultiSelectComponent ),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormPredefinedMultiSelectComponent implements ControlValueAccessor {

  @Input() controlDef: PredefinedMultiSelectControlDef;
  isDisabled = false;

  selectedValues: string[] = [];
  private _onChange: ( newValue: any ) => void = () => {};

  writeValue( newValues: string[] ) {
    if ( newValues !== undefined && newValues !== null && Array.isArray( newValues ) ) {
      this.selectedValues = newValues;
    }
  }

  registerOnChange( fn: any ): void {
    this._onChange = fn;
  }

  registerOnTouched( fn: any ): void {
  }

  setDisabledState( isDisabled: boolean ): void {
    this.isDisabled = isDisabled;
  }

  onSelect( selected: string ) {
    if ( !this.isDisabled ) {
      this.selectedValues.push( selected );
      this._onChange( this.selectedValues );
    }
  }

  onRemove( toRemove: string ) {
    if ( !this.isDisabled ) {
      _.pull( this.selectedValues, toRemove );
      this._onChange( this.selectedValues );
    }
  }


  get options(): string[] {
    return _.difference(  this.controlDef.options, this.selectedValues );
  }

}
