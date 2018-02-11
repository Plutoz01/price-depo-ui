import { Observable } from "rxjs/Observable";
import { Identifiable } from "../models/identifiable.interface";
import { Pageable } from "../models/pageable.class";
import { PagedResponse } from "../models/paged-response.interface";

export interface CrudRepository<T extends Identifiable<ID>, ID> {
  getAll( pageable?: Pageable ): Observable<PagedResponse<T>>;

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
