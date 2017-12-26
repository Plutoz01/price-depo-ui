import { Action } from "@ngrx/store";
import { Pageable } from "../models/pageable.class";
import { PagedResponse } from "../models/paged-response.interface";
import { Identifiable } from "libs/data-handling/src/models/identifiable.interface";

export abstract class LoadAllAction<M extends Identifiable<any>> implements Action {
  abstract readonly type: string;
  constructor( public readonly pageable: Pageable ) {}
}

export abstract class LoadAllSuccessAction<M extends Identifiable<any>> implements Action {
  abstract readonly type: string;
  constructor( public readonly pagedResponse: PagedResponse<M> ) {}
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


