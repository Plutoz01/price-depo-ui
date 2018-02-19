import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { MockComponent } from 'ng2-mock-component';

import { NotificationContainerComponent } from './notification-container.component';

describe( 'NotificationContainerComponent', () => {
  let component: NotificationContainerComponent;
  let fixture: ComponentFixture<NotificationContainerComponent>;

  beforeEach(
    async( () => {
      TestBed.configureTestingModule( {
        imports: [
          StoreModule.forRoot( {
            // TODO: store slice with user for auth
          } )
        ],
        declarations: [
          NotificationContainerComponent,
          MockComponent( { selector: 'pd-notification-item', inputs: [ 'notification' ] } )
        ]
      } ).compileComponents();
    } )
  );

  beforeEach( () => {
    fixture = TestBed.createComponent( NotificationContainerComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
