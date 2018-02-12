import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng2-mock-component';

import { DataTableComponent } from './data-table.component';

describe( 'DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [
        DataTableComponent,
        MockComponent( { selector: 'pd-paginator', inputs: [ 'paginationInfo' ] } ),
        MockComponent( { selector: 'pd-page-size-chooser', inputs: [ 'choices', 'selected' ] })
      ]
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( DataTableComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
