import { Routes } from "@angular/router";
import { AdminPageComponent } from "../components/admin-page/admin-page.component";
import { chainStoreRoutes } from "./chain-store.routes";
import { manufacturerRoutes } from "./manufacturer.routes";
import { shopRoutes } from "./shop.routes";

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
