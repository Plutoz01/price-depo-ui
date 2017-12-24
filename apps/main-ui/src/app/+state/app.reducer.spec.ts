import { DataLoaded } from './app.actions';
import { MainUiState } from './app.interfaces';
import { appReducer } from './app.reducer';

describe( 'appReducer', () => {
  it( 'should work', () => {
    const state: MainUiState = {};
    const action: DataLoaded = new DataLoaded( {} );
    const actual = appReducer( state, action );
    expect( actual ).toEqual( {} );
  } );
} );
