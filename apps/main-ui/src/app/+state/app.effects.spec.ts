import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { DataPersistence } from '@nrwl/nx';
import { hot, readAll } from '@nrwl/nx/testing';
import { DATA_LOADED, LOAD_DATA } from './app.actions';
import { AppEffects } from './app.effects';

describe( 'AppEffects', () => {
  let actions;
  let effects: AppEffects;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      imports: [
        StoreModule.forRoot( {
          // TODO: store slice with user for auth
        } )
      ],
      providers: [ AppEffects, DataPersistence, provideMockActions( () => actions ) ]
    } );

    effects = TestBed.get( AppEffects );
  } );

  describe( 'someEffect', () => {
    it( 'should work', async () => {
      actions = hot( '-a-|', { a: { type: LOAD_DATA } } );
      expect( await readAll( effects.loadData ) ).toEqual( [ { type: DATA_LOADED, payload: {} } ] );
    } );
  } );
} );
