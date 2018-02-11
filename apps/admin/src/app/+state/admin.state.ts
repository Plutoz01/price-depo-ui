import { MasterDetailsState } from "@price-depo-ui/data-handling";
import { DynamicFormDef } from "@price-depo-ui/dynamic-form";
import { ChainStore, Manufacturer, Product, Shop } from "@price-depo-ui/product";

export interface AdminState {
  manufacturers: MasterDetailsState<Manufacturer>;
  chainStores: MasterDetailsState<ChainStore>;
  shops: MasterDetailsState<Shop>;
  products: MasterDetailsState<Product>;
  formDef?: DynamicFormDef;
}

export interface AdminAppState {
  readonly app: AdminState;
}
