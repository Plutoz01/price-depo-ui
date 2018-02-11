import { Routes } from '@angular/router';
import { AdminPageComponent } from '../components/admin-page/admin-page.component';
import { NotFoundPageComponent } from '../components/not-found-page/not-found-page.component';
import { chainStoreRoutes } from './chain-store.routes';
import { manufacturerRoutes } from './manufacturer.routes';
import { productRoutes } from './product.routes';
import { shopRoutes } from './shop.routes';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AdminPageComponent
  },
  {
    path: '404',
    component: NotFoundPageComponent,
  },
  ...manufacturerRoutes,
  ...chainStoreRoutes,
  ...productRoutes,
  ...shopRoutes
];
