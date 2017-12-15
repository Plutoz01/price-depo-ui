import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { FormElementDefinition } from "libs/shared/src/models/form-element-definition.inteface";

@Component( {
  selector: 'pd-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: [ './dynamic-form.component.scss' ]
} )
export class DynamicFormComponent implements OnChanges {

  @Input() item?: Object;
  @Input() formDefinitions: FormElementDefinition[];
  @Output() save = new EventEmitter<Object>();

  editorForm: FormGroup;

  static createFormGroup( formDefinitions: FormElementDefinition[] ): FormGroup {
    const formBuilder = new FormBuilder();

    const result = formBuilder.group( {} );
    formDefinitions.forEach( ( formDef: FormElementDefinition ) => {
      const validators: ValidatorFn[] = [];
      if ( formDef.required ) {
        validators.push( Validators.required );
      }

      result.addControl( formDef.key, formBuilder.control( null, validators ) );
    } );

    return result;
  }

  ngOnChanges( changes: SimpleChanges ) {
    if ( changes && changes[ 'formDefinitions' ] ) {
      this.editorForm = DynamicFormComponent.createFormGroup( changes[ 'formDefinitions' ].currentValue );
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

}
