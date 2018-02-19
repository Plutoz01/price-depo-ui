import { Routes } from '@angular/router';
import { AdminDetailsPageComponent } from '../components/admin-details/admin-details.component';
import { AdminListPageComponent } from '../components/admin-list/admin-list.component';
import { chainStoreMasterDetailsRouterData } from '../data/router.data';
import { AdminDataType } from '../models/admin-data-type.enum';

export const chainStoreRoutes: Routes = [
  {
    path: `${AdminDataType.chainStores}`,
    component: AdminListPageComponent,
    data: {
      masterDetails: chainStoreMasterDetailsRouterData
    }
  },
  {
    path: `${AdminDataType.chainStores}/new`,
    component: AdminDetailsPageComponent,
    data: {
      masterDetails: chainStoreMasterDetailsRouterData,
      isNew: true
    }
  },
  {
    path: `${AdminDataType.chainStores}/:id`,
    component: AdminDetailsPageComponent,
    data: {
      masterDetails: chainStoreMasterDetailsRouterData
    }
  }
];
