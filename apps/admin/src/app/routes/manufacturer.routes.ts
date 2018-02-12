import { Routes } from '@angular/router';
import { AdminDetailsPageComponent } from '../components/admin-details/admin-details.component';
import { AdminListPageComponent } from '../components/admin-list/admin-list.component';
import { manufacturerMasterDetailsRouterData } from '../data/router.data';
import { AdminDataType } from '../models/admin-data-type.enum';

export const manufacturerRoutes: Routes = [
  {
    path: `${ AdminDataType.manufacturers }`,
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
