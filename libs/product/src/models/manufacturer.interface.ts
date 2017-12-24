import { Identifiable } from "libs/data-handling/src/models/identifiable.interface";

export interface Manufacturer extends Identifiable<string> {
  name: string;
  country: string;
}
