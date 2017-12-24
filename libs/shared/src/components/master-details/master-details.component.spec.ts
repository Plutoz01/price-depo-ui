import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDetailsComponent } from './master-details.component';

describe( 'MasterDetailsComponent', () => {
  let component: MasterDetailsComponent<any>;
  let fixture: ComponentFixture<MasterDetailsComponent<any>>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      declarations: [ MasterDetailsComponent ]
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( MasterDetailsComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
