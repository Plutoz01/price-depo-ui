import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { MockComponent } from 'ng2-mock-component';

import { AdminDetailsPageComponent } from './admin-details.component';

describe( 'AdminDetailsPageComponent', () => {
  let component: AdminDetailsPageComponent<any>;
  let fixture: ComponentFixture<AdminDetailsPageComponent<any>>;

  beforeEach(
    async( () => {
      TestBed.configureTestingModule( {
        imports: [ StoreModule.forRoot( {} ), RouterTestingModule ],
        declarations: [
          AdminDetailsPageComponent,
          MockComponent( { selector: 'pd-dynamic-form', inputs: [ 'item', 'formDef' ] } )
        ]
      } ).compileComponents();
    } )
  );

  beforeEach( () => {
    fixture = TestBed.createComponent( AdminDetailsPageComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
