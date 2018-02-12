import { Routes } from '@angular/router';
import { AdminDetailsPageComponent } from '../components/admin-details/admin-details.component';
import { AdminListPageComponent } from '../components/admin-list/admin-list.component';
import { shopMasterDetailsRouteData } from '../data/router.data';
import { AdminDataType } from '../models/admin-data-type.enum';

export const shopRoutes: Routes = [
  {
    path: `${ AdminDataType.shops }`,
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
