import { FilterBase } from "libs/data-handling/src/models/filter.type";
import { Identifiable } from "libs/data-handling/src/models/identifiable.interface";
import { HttpFilterableCrudBaseRepository } from "libs/data-handling/src/repositories/http-filterable-crud-base.repository";
import { SearchProvider } from "libs/dynamic-form/src/models/search-provider.interface";
import { Observable } from "rxjs/Observable";

export abstract class HttpSearchProviderBaseService<T extends Identifiable<ID>, ID, FK extends string>
  implements SearchProvider<T, ID, FK> {

  constructor( private readonly repository: HttpFilterableCrudBaseRepository<T, ID, FK> ){}

  getById( id: ID ): Observable<T | undefined> {
    return this.repository.getById( id );
  }

  filterBy( filter: FilterBase<FK> ): Observable<T[]>{
    return this.repository.filterBy( filter );
  }
}
