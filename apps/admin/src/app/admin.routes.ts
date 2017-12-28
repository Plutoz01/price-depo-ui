import { Routes } from "@angular/router";
import { AdminDetailsPageComponent } from "./components/admin-details/admin-details.component";
import { AdminListPageComponent } from "./components/admin-list/admin-list.component";
import { AdminPageComponent } from "./components/admin-page/admin-page.component";
import { chainStoreMasterDetailsRouterData, manufacturerMasterDetailsRouterData, shopMasterDetailsRouteData } from "./data/router.data";
import { AdminDataType } from "./models/admin-data-type.enum";

const manufacturerRoutes: Routes = [
  {
    path: AdminDataType.manufacturers,
    component: AdminListPageComponent,
    data: {
      masterDetails: manufacturerMasterDetailsRouterData
    }
  },
  {
    path: `${ AdminDataType.manufacturers }/new`,
    component: AdminDetailsPageComponent,
    data: {
      masterDetails: manufacturerMasterDetailsRouterData,
      isNew: true
    }
  },
  {
    path: `${ AdminDataType.manufacturers }/:id`,
    component: AdminDetailsPageComponent,
    data: {
      masterDetails: manufacturerMasterDetailsRouterData
    }
  }
];

const chainStoreRoutes: Routes = [
  {
    path: AdminDataType.chainStores,
    component: AdminListPageComponent,
    data: {
      masterDetails: chainStoreMasterDetailsRouterData
    }
  },
  {
    path: `${ AdminDataType.chainStores }/new`,
    component: AdminDetailsPageComponent,
    data: {
      masterDetails: chainStoreMasterDetailsRouterData,
      isNew: true
    }
  },
  {
    path: `${ AdminDataType.chainStores }/:id`,
    component: AdminDetailsPageComponent,
    data: {
      masterDetails: chainStoreMasterDetailsRouterData
    }
  }
];

const shopRoutes: Routes = [
  {
    path: AdminDataType.shops,
    component: AdminListPageComponent,
    data: {
      masterDetails: shopMasterDetailsRouteData
    }
  },
  {
    path: `${ AdminDataType.shops }/new`,
    component: AdminDetailsPageComponent,
    data: {
      masterDetails: shopMasterDetailsRouteData,
      isNew: true
    }
  },
  {
    path: `${ AdminDataType.shops }/:id`,
    component: AdminDetailsPageComponent,
    data: {
      masterDetails: shopMasterDetailsRouteData
    }
  }
];

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AdminPageComponent
  },
  ...manufacturerRoutes,
  ...chainStoreRoutes,
  ...shopRoutes
];
