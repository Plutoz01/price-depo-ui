import { ProductSearch } from './product-search.interfaces';

export const productSearchInitialState: ProductSearch = {
  searchExpression: '',
  searchResults: [],
  isLoading: false
};
