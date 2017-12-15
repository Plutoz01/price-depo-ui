import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerAdminComponent } from './manufacturer-admin.component';

describe( 'ManufacturerAdminComponent', () => {
  let component: ManufacturerAdminComponent;
  let fixture: ComponentFixture<ManufacturerAdminComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ ManufacturerAdminComponent ]
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( ManufacturerAdminComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
