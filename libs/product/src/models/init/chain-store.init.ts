import { ChainStore } from '../../models/chain-store.interface';

export function initialChainStore(): ChainStore {
  return {
    name: '',
    website: ''
  };
}
