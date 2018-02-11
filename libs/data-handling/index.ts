export { DataHandlingModule } from './src/data-handling.module';

export { Identifiable } from './src/models/identifiable.interface';
export { FilterBase, FilterElement, FilterMatchType } from './src/models/filter.type';
export { Pageable } from './src/models/pageable.class';
export { PaginationInfo } from './src/models/pagination-info.interface';
export { PagedResponse } from './src/models/paged-response.interface';
export { emptyPaginationInfo } from './src/data/empty-pagination-info.data';

export { CrudRepository } from './src/repositories/crud-repository.interface';
export { HttpCrudBaseRepository } from './src/repositories/http-crud-base.repository';
export { HttpFilterableCrudBaseRepository } from './src/repositories/http-filterable-crud-base.repository';
export { MasterDetailsState } from './src/+state/master-details/master-details.state';

export { handlePaginationChange } from './src/+state/pagination/pagination.handlers';
export { createMasterDetailsInitialState } from './src/+state/master-details/master-details.init';
