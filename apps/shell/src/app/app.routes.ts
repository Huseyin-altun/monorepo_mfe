import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'calendar',
    loadChildren: () =>
      import('calendar/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'project',
    loadChildren: () =>
      import('project/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('dashboard/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
