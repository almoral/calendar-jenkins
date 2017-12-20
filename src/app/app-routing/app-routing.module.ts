import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from '../calendar/calendar.component';
import {CalendarEventDetailsComponent} from '../calendar-event-details/calendar-event-details.component';

const routes: Routes = [
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {path: 'calendar/event/:eventID', component: CalendarEventDetailsComponent},
  {path: '**', component: CalendarComponent}
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
