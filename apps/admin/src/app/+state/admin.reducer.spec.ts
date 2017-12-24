import { adminReducer } from './admin.reducer';
import { adminInitialState } from './admin.init';
import { AdminState } from './admin.interfaces';
import { DataLoaded } from './admin.actions';

describe('adminReducer', () => {
  it('should work', () => {
    const state: AdminState = {};
    const action: DataLoaded = {type: 'DATA_LOADED', payload: {}};
    const actual = adminReducer(state, action);
    expect(actual).toEqual({});
  });
});
