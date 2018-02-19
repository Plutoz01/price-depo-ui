import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSizeChooserComponent } from './page-size-chooser.component';

describe( 'PageSizeChooserComponent', () => {
  let component: PageSizeChooserComponent;
  let fixture: ComponentFixture<PageSizeChooserComponent>;

  beforeEach(
    async( () => {
      TestBed.configureTestingModule( {
        declarations: [ PageSizeChooserComponent ]
      } ).compileComponents();
    } )
  );

  beforeEach( () => {
    fixture = TestBed.createComponent( PageSizeChooserComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
