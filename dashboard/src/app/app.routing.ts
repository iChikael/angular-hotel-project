import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'dashboard',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./hotel/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'booking',
        loadChildren: () =>
          import('./hotel/page-scheduler/page-scheduler.component').then(
            (m) => m.PageSchedulerComponent
          ),
      },
    ],
  },
];