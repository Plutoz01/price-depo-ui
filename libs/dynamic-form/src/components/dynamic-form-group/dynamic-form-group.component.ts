import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { DynamicFormGroupDef } from "@price-depo-ui/dynamic-form/src/models/dynamic-form.interface";

@Component({
  selector: 'pd-dynamic-form-group',
  templateUrl: './dynamic-form-group.component.html',
  styleUrls: ['./dynamic-form-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormGroupComponent {
  @Input() formGroupDef: DynamicFormGroupDef;
  @Input() control: FormGroup;
}
