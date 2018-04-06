import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MDCCalendarComponent} from '../calendar/calendar.component';
import {CalendarGridViewComponent} from '../calendar-grid-view/calendar-grid-view.component';
import {CalendarListViewComponent} from '../calendar-list-view/calendar-list-view.component';



const routes: Routes = [
  { path: '', redirectTo: 'calendar', pathMatch: 'full' },
  { path: 'calendar',
    component: MDCCalendarComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'grid', component: CalendarGridViewComponent },
      { path: 'list', component: CalendarListViewComponent }
    ]
  },
  { path: '**', redirectTo: 'calendar'}
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
