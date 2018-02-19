import { Product } from '@price-depo-ui/product';

export interface ProductSearch {
  searchExpression: string;
  searchResults: Product[];
  isLoading: boolean;
}

export interface ProductSearchState {
  readonly productSearch: ProductSearch;
}
