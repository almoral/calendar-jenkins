import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DataStoreService} from '../shared/services/data-store.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'mdc-calendar-filter-by-calendar',
  templateUrl: './calendar-filter-by-calendar.component.html',
  styleUrls: ['./calendar-filter-by-calendar.component.css']
})
export class CalendarFilterByCalendarComponent implements OnInit {



  options$: Observable<Array<Object>>;
  currentSelectedOptions$: Observable<Array<Object>>;

  @Input() toggleContainer = true;


  constructor( private dataStoreService: DataStoreService,
               private route: ActivatedRoute) {}

  ngOnInit() {

    this.options$ = this.dataStoreService.calendars$;
    this.currentSelectedOptions$ = this.dataStoreService.calendarsFilter$;

    this.route.queryParams
      .subscribe( params => {
        this.toggleContainer = false;
        this.onOptionsSelected(params.departmentFilter.split(','));
      });
  }

  onOptionsSelected(options: Array<string>) {
    this.dataStoreService.setCalendarsFilter(options);
  }



}
