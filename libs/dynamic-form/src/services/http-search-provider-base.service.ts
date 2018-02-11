import { FilterBase, HttpFilterableCrudBaseRepository, Identifiable } from '@price-depo-ui/data-handling';
import { Observable } from 'rxjs/Observable';

import { SearchProvider } from '../models/search-provider.interface';

export abstract class HttpSearchProviderBaseService<T extends Identifiable<ID>, ID, FK extends string>
  implements SearchProvider<T, ID, FK> {

  constructor( private readonly repository: HttpFilterableCrudBaseRepository<T, ID, FK> ) {
  }

  getById( id: ID ): Observable<T | undefined> {
    return this.repository.getById( id );
  }

  filterBy( filter: FilterBase<FK> ): Observable<T[]> {
    return this.repository.filterBy( filter );
  }
}
