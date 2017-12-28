import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl } from "@angular/forms";
import { DynamicFormTextControlDef } from "@price-depo-ui/dynamic-form/src/models/dynamic-form.interface";

@Component({
  selector: 'pd-dynamic-form-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormTextInputComponent   {

  @Input() controlDef: DynamicFormTextControlDef;
  @Input() control: FormControl;

  constructor() { }

}
