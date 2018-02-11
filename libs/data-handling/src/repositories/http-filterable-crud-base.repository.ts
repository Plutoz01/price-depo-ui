import { Observable } from 'rxjs/Observable';

import { FilterBase } from '../models/filter.type';
import { Identifiable } from '../models/identifiable.interface';
import { FilterableRepository } from './filterable-repository.interface';
import { HttpCrudBaseRepository } from './http-crud-base.repository';

export abstract class HttpFilterableCrudBaseRepository<T extends Identifiable<ID>, ID, FK extends string>
  extends HttpCrudBaseRepository<T, ID> implements FilterableRepository<T, FK> {

  filterBy( filter: FilterBase<FK> ): Observable<T[]> {
    return this.httpClient.post<T[]>( `${ this.getApiUrl() }/filter`, filter );
  }
}
