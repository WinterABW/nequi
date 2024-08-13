import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadComponent: () =>
      import('./views/main/main.component').then((c) => c.MainComponent),
  },
  {
    path: 'mining',
    loadComponent: () =>
      import('./views/mining/mining.component').then((c) => c.MiningComponent),
  },
];
