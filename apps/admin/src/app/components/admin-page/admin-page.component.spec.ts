import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { HasPermissionDirective } from '@price-depo-ui/security';

import { AdminPageComponent } from './admin-page.component';

describe( 'AdminPageComponent', () => {
  let component: AdminPageComponent;
  let fixture: ComponentFixture<AdminPageComponent>;

  beforeEach(
    async( () => {
      TestBed.configureTestingModule( {
        imports: [ StoreModule.forRoot( {} ) ],
        declarations: [ AdminPageComponent, HasPermissionDirective ]
      } ).compileComponents();
    } )
  );

  beforeEach( () => {
    fixture = TestBed.createComponent( AdminPageComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
