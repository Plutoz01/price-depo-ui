import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerListPageComponent } from './list.component';

describe( 'ManufacturerListPageComponent', () => {
  let component: ManufacturerListPageComponent;
  let fixture: ComponentFixture<ManufacturerListPageComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ ManufacturerListPageComponent ]
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( ManufacturerListPageComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
