import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      animation: 0,
    },
  },
  {
    path: 'products',
    component: ProductListComponent,
    data: {
      animation: 1,
    },
  },
];
