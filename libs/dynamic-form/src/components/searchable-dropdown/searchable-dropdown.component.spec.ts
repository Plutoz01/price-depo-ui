import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Identifiable } from '@price-depo-ui/data-handling';

import { DynamicFormSearchableDropdownComponent } from './searchable-dropdown.component';

describe( 'DynamicFormSearchableDropdownComponent', () => {
  let component: DynamicFormSearchableDropdownComponent<TestClass, string>;
  let fixture: ComponentFixture<DynamicFormSearchableDropdownComponent<TestClass, string>>;

  beforeEach(
    async( () => {
      TestBed.configureTestingModule( {
        declarations: [ DynamicFormSearchableDropdownComponent ]
      } ).compileComponents();
    } )
  );

  beforeEach( () => {
    fixture = TestBed.createComponent( DynamicFormSearchableDropdownComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );

class TestClass implements Identifiable<string> {
  id: string;
}
