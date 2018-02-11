import { Identifiable } from "@price-depo-ui/data-handling";

export interface ChainStore extends Identifiable<string> {
  name: string;
  website: string;
}
