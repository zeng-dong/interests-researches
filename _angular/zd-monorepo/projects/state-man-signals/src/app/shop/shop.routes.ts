import { Routes } from '@angular/router';
import { Catalog } from './catalog/catalog';
import { Cart } from './cart/cart';
import { Checkout } from './checkout/checkout';

export const shopRoutes: Routes = [
  { path: 'catalog', component: Catalog },
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Checkout },
];
