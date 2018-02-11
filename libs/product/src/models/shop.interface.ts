import { Identifiable } from "@price-depo-ui/data-handling";

import { Address } from "./address.interface";

export interface Shop extends Identifiable<string> {
  name: string;
  address: Address;
  chainStoreId?: string;
}
