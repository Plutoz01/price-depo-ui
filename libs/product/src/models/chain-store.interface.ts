import { Identifiable } from "libs/data-handling/src/models/identifiable.interface";

export interface ChainStore extends Identifiable<string> {
  name: string;
  website: string;
}
