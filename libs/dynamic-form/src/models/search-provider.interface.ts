import { FilterBase } from "@price-depo-ui/data-handling/src/models/filter.type";
import { Identifiable } from "@price-depo-ui/data-handling/src/models/identifiable.interface";
import { Observable } from "rxjs/Observable";

export interface SearchProvider<T extends Identifiable<ID>, ID, FK extends string> {
  getById( id: ID ): Observable<T | undefined>;
  filterBy( filter: FilterBase<FK> ): Observable<T[]>;
}
