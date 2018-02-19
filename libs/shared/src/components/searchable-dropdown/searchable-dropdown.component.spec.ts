import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClickOutsideModule } from 'ng-click-outside';

import { SearchableDropdownComponent } from './searchable-dropdown.component';

describe( 'SearchableDropdownComponent', () => {
  let component: SearchableDropdownComponent<any>;
  let fixture: ComponentFixture<SearchableDropdownComponent<any>>;

  beforeEach(
    async( () => {
      TestBed.configureTestingModule( {
        imports: [ ClickOutsideModule ],
        declarations: [ SearchableDropdownComponent ]
      } ).compileComponents();
    } )
  );

  beforeEach( () => {
    fixture = TestBed.createComponent( SearchableDropdownComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
