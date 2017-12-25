import { Action } from "@ngrx/store";
import { Identifiable } from "libs/data-handling/src/models/identifiable.interface";

export abstract class LoadAllSuccessAction<M extends Identifiable<any>> implements Action {
  abstract readonly type: string;
  constructor( public readonly loadedItems: M[] ) {}
}

export abstract class LoadByIdAction<ID> implements Action {
  abstract readonly type: string;
  constructor( public readonly id: ID ) {}
}

export abstract class LoadByIdSuccessAction<M extends Identifiable<any>> implements Action {
  abstract readonly type: string;
  constructor( public readonly loadedItem: M ) {}
}

export abstract class SaveAction<M extends Identifiable<any>> implements Action {
  abstract readonly type: string;
  constructor( public readonly saveable: M ) {}
}

export abstract class SaveSuccessAction<M extends Identifiable<any>> implements Action {
  abstract readonly type: string;
  constructor( public readonly saved: M ) {}
}

export abstract class DeleteAction<M extends Identifiable<any>> implements Action {
  abstract readonly type: string;
  constructor( public readonly deletable: M ) {}
}

export abstract class DeleteSuccessAction<ID> implements Action {
  abstract readonly type: string;
  constructor( public readonly deletedId: ID ) {}
}


