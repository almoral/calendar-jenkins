import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MDCCalendarComponent} from '../calendar/calendar.component';
import {CalendarGridViewComponent} from '../calendar-grid-view/calendar-grid-view.component';

const routes: Routes = [
  {path: 'month', component: CalendarGridViewComponent},
  {path: '**', component: MDCCalendarComponent}
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
