import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { EventFormComponent } from './event-form/event-form.component';
import { EventListComponent } from './event-list/event-list.component';

const routes: Route[] = [
 	{ path: '', redirectTo: 'eventlist', pathMatch: 'full'},
 	{ path: 'eventlist', component: EventListComponent},
 	{ path: 'register', component: EventFormComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: false
  }
);