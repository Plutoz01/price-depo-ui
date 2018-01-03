import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { Identifiable } from "@price-depo-ui/data-handling/src/models/identifiable.interface";
import { DynamicFormGroupDef } from "@price-depo-ui/dynamic-form/src/models/dynamic-form.interface";
import { DynamicFormFactory } from "@price-depo-ui/dynamic-form/src/services/DynamicFormFactory.service";

@Component( {
  selector: 'pd-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: [ './dynamic-form.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
} )
export class DynamicFormComponent<T extends Identifiable<any>> implements OnChanges {

  @Input() item?: T;
  @Input() formDef: DynamicFormGroupDef;
  @Output() save = new EventEmitter<T>();
  @Output() delete = new EventEmitter<T>();
  @Output() back = new EventEmitter();

  editorForm: FormGroup;

  constructor( private readonly formFactory: DynamicFormFactory ) {
  }

  get isDeletable(): boolean {
    return !!this.item && this.item.id;
  }

  ngOnChanges( changes: SimpleChanges ) {
    if ( changes && changes[ 'formDef' ] ) {
      this.editorForm = this.formFactory.buildFormGroup( changes[ 'formDef' ].currentValue, this.item );
    }

    if ( changes && changes[ 'item' ] ) {
      this.editorForm.reset( changes[ 'item' ].currentValue );
    }
  }

  onSave() {
    if ( this.editorForm.valid ) {
      this.save.emit( this.editorForm.value );
    } else {
      // TODO: scroll to first invalid field
      console.log( 'form is still invalid' );
    }
  }

  onDelete() {
    if ( !!this.item.id ) {
      this.delete.emit( this.item );
    }
  }

}
