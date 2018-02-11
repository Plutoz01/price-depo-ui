import {
  ChainStore, initialChainStore, initialManufacturer, initialProduct, initialShop, Manufacturer, Product,
  Shop
} from "@price-depo-ui/product";
import {
  getChainStoreMasterDetailsStateSelector, getManufacturerMasterDetailsStateSelector, getProductMasterDetailsStateSelector,
  getShopMasterDetailsStateSelector
} from "../+state/admin.selectors";
import { AdminDataType } from "../models/admin-data-type.enum";
import { MasterDetailsRouterData } from "../models/master-details-router-data.interface";
import {
  chainStoreColumnDefinitions, manufacturerColumnDefinitions, productColumnDefinitions,
  shopColumnDefinitions
} from "./column-definitions.data";

export const manufacturerMasterDetailsRouterData: MasterDetailsRouterData<Manufacturer> = {
  dataType: AdminDataType.manufacturers,
  title: 'Manufacturers',
  columnDefinitions: manufacturerColumnDefinitions,
  formDefId: 'manufacturer-admin-form',
  masterDetailsStateSelector: getManufacturerMasterDetailsStateSelector,
  initialValue: initialManufacturer()
};

export const chainStoreMasterDetailsRouterData: MasterDetailsRouterData<ChainStore> = {
  dataType: AdminDataType.chainStores,
  title: 'Chain stores',
  columnDefinitions: chainStoreColumnDefinitions,
  formDefId: 'chain-store-admin-form',
  masterDetailsStateSelector: getChainStoreMasterDetailsStateSelector,
  initialValue: initialChainStore()
};

export const shopMasterDetailsRouteData: MasterDetailsRouterData<Shop> = {
  dataType: AdminDataType.shops,
  title: 'Shops',
  columnDefinitions: shopColumnDefinitions,
  formDefId: 'shop-admin-form',
  masterDetailsStateSelector: getShopMasterDetailsStateSelector,
  initialValue: initialShop()
};

export const productMasterDetailsRouteData: MasterDetailsRouterData<Product> = {
  dataType: AdminDataType.products,
  title: 'Products',
  columnDefinitions: productColumnDefinitions,
  formDefId: 'product-admin-form',
  masterDetailsStateSelector: getProductMasterDetailsStateSelector,
  initialValue: initialProduct()
};
