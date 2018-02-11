import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { AuthenticatedDirective, HasPermissionDirective } from '@price-depo-ui/security';

import { PageHeaderComponent } from './page-header.component';

describe( 'PageHeaderComponent', () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      imports: [
        StoreModule.forRoot( {
          // TODO: store slice with user for auth
        } ),
        NgbModule.forRoot()
      ],
      declarations: [
        PageHeaderComponent,
        AuthenticatedDirective,
        HasPermissionDirective
      ]
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( PageHeaderComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
