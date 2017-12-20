import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from '../calendar/calendar.component';
import {CalendarEventDetailsComponent} from '../calendar-event-details/calendar-event-details.component';

const routes: Routes = [
  // {path: '', redirectTo: 'calendar', pathMatch: 'full' },
  {
    path: 'calendar',
    component: CalendarComponent
  },
    // children: [
      // {path: 'events', redirectTo: 'events', pathMatch: 'full'},
      {path: 'calendar/event/:eventID', component: CalendarEventDetailsComponent}
      ,
    // ]
  // }
  // ,
  // {path: '', component: CalendarComponent},
  {path: '**', component: CalendarComponent}
  // {path: 'event', component: CalendarEventDetailsComponent}
  // {path: '', redirectTo: 'events', pathMatch: 'full'},
  // {path: 'events', component: EventsComponent},
  // {path: 'test', component: TestViewComponent},
  // {path: '**', component: EventsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
