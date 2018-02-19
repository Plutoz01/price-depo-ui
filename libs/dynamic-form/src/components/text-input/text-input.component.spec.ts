import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DynamicFormControlDef, DynamicFormElementType } from '@price-depo-ui/dynamic-form';

import { DynamicFormTextInputComponent } from './text-input.component';

describe( 'DynamicFormTextInputComponent', () => {
  let component: DynamicFormTextInputComponent;
  let wrapperFixture: ComponentFixture<TestWrapperComponent>;

  beforeEach(
    async( () => {
      TestBed.configureTestingModule( {
        imports: [ ReactiveFormsModule ],
        declarations: [ TestWrapperComponent, DynamicFormTextInputComponent ]
      } ).compileComponents();
    } )
  );

  beforeEach( () => {
    wrapperFixture = TestBed.createComponent( TestWrapperComponent );
    component = wrapperFixture.debugElement.query( By.directive( DynamicFormTextInputComponent ) ).componentInstance;
    wrapperFixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );

@Component( {
  template: `<pd-dynamic-form-text-input [control]="control" [controlDef]="controlDef"></pd-dynamic-form-text-input>`
} )
class TestWrapperComponent {
  control: FormControl;
  controlDef: DynamicFormControlDef;

  constructor( formBuilder: FormBuilder ) {
    this.control = formBuilder.control( '' );
    this.controlDef = {
      type: DynamicFormElementType.text,
      key: 'name',
      required: false,
      label: 'Name',
      description: 'Enter name here',
      placeholder: 'Placeholder for name'
    };
  }
}
