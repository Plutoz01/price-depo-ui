import { Routes } from "@angular/router";
import { AdminDetailsPageComponent } from "../components/admin-details/admin-details.component";
import { AdminListPageComponent } from "../components/admin-list/admin-list.component";
import { productMasterDetailsRouteData } from "../data/router.data";
import { AdminDataType } from "../models/admin-data-type.enum";

export const productRoutes: Routes = [
  {
    path: AdminDataType.products,
    component: AdminListPageComponent,
    data: {
      masterDetails: productMasterDetailsRouteData
    }
  },
  {
    path: `${ AdminDataType.products }/new`,
    component: AdminDetailsPageComponent,
    data: {
      masterDetails: productMasterDetailsRouteData,
      isNew: true
    }
  },
  {
    path: `${ AdminDataType.products }/:id`,
    component: AdminDetailsPageComponent,
    data: {
      masterDetails: productMasterDetailsRouteData
    }
  }
];
