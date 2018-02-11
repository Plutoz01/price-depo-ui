import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { AuthenticatedDirective } from '@price-depo-ui/security';
import { MockComponent } from 'ng2-mock-component';

import { AppComponent } from './app.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageHeaderComponent } from './page-header/page-header.component';

describe( 'AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      imports: [
        RouterTestingModule,
        StoreModule.forRoot( {
          // TODO: store slice with user for auth
        } )
      ],
      declarations: [
        AppComponent,
        AuthenticatedDirective,
        MockComponent( { selector: 'pd-page-header' } ),
        MockComponent( { selector: 'pd-page-footer' } ),
        MockComponent( { selector: 'pd-notification-container' } )
      ]
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( AppComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
