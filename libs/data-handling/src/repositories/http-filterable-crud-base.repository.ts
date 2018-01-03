import { FilterBase } from "@price-depo-ui/data-handling/src/models/filter.type";
import { Identifiable } from "@price-depo-ui/data-handling/src/models/identifiable.interface";
import { FilterableRepository } from "@price-depo-ui/data-handling/src/repositories/filterable-repository.interface";
import { HttpCrudBaseRepository } from "@price-depo-ui/data-handling/src/repositories/http-crud-base.repository";
import { Observable } from "rxjs/Observable";

export abstract class HttpFilterableCrudBaseRepository<T extends Identifiable<ID>, ID, FK extends string>
  extends HttpCrudBaseRepository<T, ID> implements FilterableRepository<T, FK> {

  filterBy( filter: FilterBase<FK> ): Observable<T[]> {
    return this.httpClient.post<T[]>( `${ this.getApiUrl() }/filter`, filter );
  }
}
