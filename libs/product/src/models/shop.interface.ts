import { Identifiable } from "@price-depo-ui/data-handling/src/models/identifiable.interface";
import { Address } from "@price-depo-ui/product/src/models/address.interface";

export interface Shop extends Identifiable<string> {
  name: string;
  address: Address;
  chainStoreId?: string;
}
