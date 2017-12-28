import { ChainStore } from "@price-depo-ui/product/src/models/chain-store.interface";
import { initialChainStore } from "@price-depo-ui/product/src/models/init/chain-store.init";
import { initialManufacturer } from "@price-depo-ui/product/src/models/init/manufacturer.init";
import { initialShop } from "@price-depo-ui/product/src/models/init/shop.init";
import { Manufacturer } from "@price-depo-ui/product/src/models/manufacturer.interface";
import { Shop } from "@price-depo-ui/product/src/models/shop.interface";
import {
  getChainStoreMasterDetailsStateSelector, getManufacturerMasterDetailsStateSelector,
  getShopMasterDetailsStateSelector
} from "../+state/admin.selectors";
import { AdminDataType } from "../models/admin-data-type.enum";
import { MasterDetailsRouterData } from "../models/master-details-router-data.interface";
import { chainStoreColumnDefinitions, manufacturerColumnDefinitions, shopColumnDefinitions } from "./column-definitions.data";
import {
  chainStoreFormElementDefinitions, manufacturerFormElementDefinitions,
  shopFormElementDefinitions
} from "./formElementDefinitions.data";

export const manufacturerMasterDetailsRouterData: MasterDetailsRouterData<Manufacturer> = {
  dataType: AdminDataType.manufacturers,
  title: 'Manufacturers',
  columnDefinitions: manufacturerColumnDefinitions,
  formElementDefinitions: manufacturerFormElementDefinitions,
  masterDetailsStateSelector: getManufacturerMasterDetailsStateSelector,
  initialValue: initialManufacturer()
};

export const chainStoreMasterDetailsRouterData: MasterDetailsRouterData<ChainStore> = {
  dataType: AdminDataType.chainStores,
  title: 'Chain stores',
  columnDefinitions: chainStoreColumnDefinitions,
  formElementDefinitions: chainStoreFormElementDefinitions,
  masterDetailsStateSelector: getChainStoreMasterDetailsStateSelector,
  initialValue: initialChainStore()
};

export const shopMasterDetailsRouteData: MasterDetailsRouterData<Shop> = {
  dataType: AdminDataType.shops,
  title: 'Shops',
  columnDefinitions: shopColumnDefinitions,
  formElementDefinitions: shopFormElementDefinitions,
  masterDetailsStateSelector: getShopMasterDetailsStateSelector,
  initialValue: initialShop()
};
