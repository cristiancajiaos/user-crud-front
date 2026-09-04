import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.routes')
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.routes')
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
