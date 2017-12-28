import { ChainStore } from "@price-depo-ui/product/src/models/chain-store.interface";

export function initialChainStore(): ChainStore {
  return {
    name: '',
    website: ''
  };
}
