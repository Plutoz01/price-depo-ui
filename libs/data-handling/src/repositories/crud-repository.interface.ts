import { Identifiable } from "../models/identifiable.interface";
import { Page } from "../models/page.interface";
import { Observable } from "rxjs/Observable";

export interface CrudRepository <T extends Identifiable<ID>, ID> {
  getAll( page?: Page ): Observable<T[]>;
  getById( id: ID ): Observable<T | undefined>;
  create( entity: T ): Observable<T>;
  update( entity: T ): Observable<T>;
  /**
   * Call create() OR update() based on existence of entity.id.
   * @param {T} entity to create/update
   * @returns {Observable<T extends Identifiable<ID>>} Observable of created/updated entity
   */
  save?( entity: T ): Observable<T>;
  remove( id: ID ): Observable<void>;
}
