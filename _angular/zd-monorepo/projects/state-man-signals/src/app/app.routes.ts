import { Routes } from '@angular/router';
import { shopRoutes } from './shop/shop.routes';
import { accountRoutes } from './account/account.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'shop/catalog', pathMatch: 'full' },
  { path: 'shop', children: shopRoutes },
  {
    path: 'account',
    loadChildren: () => import('./account/account.routes').then(m => m.accountRoutes),
  },
];
