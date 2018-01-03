import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from "@angular/forms";
import { DynamicFormControlDef } from "@price-depo-ui/dynamic-form/src/models/dynamic-form.interface";

@Component({
  selector: 'pd-dynamic-form-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormTextInputComponent   {

  @Input() controlDef: DynamicFormControlDef;
  @Input() control: FormControl;

  constructor() { }

}
