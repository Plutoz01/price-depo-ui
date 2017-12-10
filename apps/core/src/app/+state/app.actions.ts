import { Action } from "@ngrx/store";

export const LOAD_DATA = 'action.app.load-data';
export const DATA_LOADED = 'action.app.data-loaded';

export class LoadData implements Action {
  readonly type = LOAD_DATA;
}

export class DataLoaded implements Action {
  readonly type = DATA_LOADED;

  constructor( public readonly payload: Object = {} ) {}

}

export type CoreAction = LoadData | DataLoaded;

