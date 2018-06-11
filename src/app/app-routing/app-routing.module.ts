import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, Router, RouterModule, Routes} from '@angular/router';
import {MDCCalendarComponent} from '../calendar/calendar.component';
import {CalendarGridViewComponent} from '../calendar-grid-view/calendar-grid-view.component';
import {CalendarListViewComponent} from '../calendar-list-view/calendar-list-view.component';
import {filter} from 'rxjs/operators';
import * as _ from 'lodash';



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
export class AppRoutingModule {

  constructor(private router: Router,
              private route: ActivatedRoute) {

    const routeName = 'calendar';

    this.route.queryParamMap
      .pipe(
        filter( params => params.keys.length > 0)
      )
      .subscribe( params => {
          this.router.navigate([routeName, {queryParams: params['params']}], {skipLocationChange: true});

    });

      this.router.navigate([routeName], {skipLocationChange: true});


  }

}
