import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { PageHeaderComponent } from './page-header/page-header.component';

describe( 'AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    async( () => {
      TestBed.configureTestingModule( {
        imports: [ RouterTestingModule ],
        declarations: [ AppComponent, PageHeaderComponent, PageFooterComponent ]
      } ).compileComponents();
    } )
  );

  beforeEach( () => {
    fixture = TestBed.createComponent( AppComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
