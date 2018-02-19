import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { NotificationItemComponent } from './notification-item.component';

describe( 'NotificationItemComponent', () => {
  let component: NotificationItemComponent;
  let fixture: ComponentFixture<NotificationItemComponent>;

  beforeEach(
    async( () => {
      TestBed.configureTestingModule( {
        imports: [
          StoreModule.forRoot( {
            // TODO: store slice with user for auth
          } )
        ],
        declarations: [ NotificationItemComponent ]
      } ).compileComponents();
    } )
  );

  beforeEach( () => {
    fixture = TestBed.createComponent( NotificationItemComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
