import { FilterBase } from "@price-depo-ui/data-handling/src/models/filter.type";
import { Identifiable } from "@price-depo-ui/data-handling/src/models/identifiable.interface";
import { Observable } from "rxjs/Observable";

export interface FilterableRepository<T extends Identifiable<any>, FK extends string> {
  filterBy( filter: FilterBase<FK> ): Observable<T[]>;
}
