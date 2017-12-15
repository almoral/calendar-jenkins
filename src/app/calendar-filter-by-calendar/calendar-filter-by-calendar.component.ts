import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DataStoreService} from '../shared/services/data-store.service';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';

@Component({
  selector: 'mdc-calendar-filter-by-calendar',
  templateUrl: './calendar-filter-by-calendar.component.html',
  styleUrls: ['./calendar-filter-by-calendar.component.css']
})
export class CalendarFilterByCalendarComponent implements OnInit {

  calendarsForm: FormGroup;
  public calendars$: Observable<string[]>;
  selectedCalendars: Array<string> = [];

  constructor( private dataStoreService: DataStoreService, private fb: FormBuilder) { }

  // TODO: Fix issue where calendar observable is being overwritten by observable used here for the calendar filters.
  ngOnInit() {
    this.calendars$ = this.dataStoreService.calendars$;

    this.calendarsForm = this.fb.group({
      calendars: []
    });
  }

  filterEvents(event) {
    if (this.selectedCalendars.indexOf(event) > -1) {
      this.selectedCalendars = _.filter(this.selectedCalendars, (item) => {
        return item !== event;
      });
    } else {
      this.selectedCalendars.push(event);
    }

    this.dataStoreService.setCalendarsFilter(this.selectedCalendars);
  }


}
