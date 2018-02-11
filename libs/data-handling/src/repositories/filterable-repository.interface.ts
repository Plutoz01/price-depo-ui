import { Observable } from "rxjs/Observable";
import { FilterBase } from "../models/filter.type";
import { Identifiable } from "../models/identifiable.interface";

export interface FilterableRepository<T extends Identifiable<any>, FK extends string> {
  filterBy( filter: FilterBase<FK> ): Observable<T[]>;
}
