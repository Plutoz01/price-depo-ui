import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormComponent } from './dynamic-form.component';

describe( 'DynamicFormComponent', () => {
  let component: DynamicFormComponent<any>;
  let fixture: ComponentFixture<DynamicFormComponent<any>>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ DynamicFormComponent ]
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( DynamicFormComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
