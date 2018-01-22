import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {InitializeService} from '../shared/services/initialize.service';
import {CheckboxGroupComponent} from '../checkbox-group/checkbox-group.component';
import * as _ from 'lodash';
import {DataStoreService} from '../shared/services/data-store.service';


@Component({
  selector: 'mdc-calendar-filter-by-calendar',
  templateUrl: './calendar-filter-by-calendar.component.html',
  styleUrls: ['./calendar-filter-by-calendar.component.css']
})
export class CalendarFilterByCalendarComponent implements OnInit {

  calendarsForm: FormGroup;
  checked = false;
  calendars$: Observable<string[]>;
  selectedCalendars: Array<string> = [];

  @Input() toggleContainer = true;

  @ViewChild(CheckboxGroupComponent) checkboxes: CheckboxGroupComponent;

  constructor( private fb: FormBuilder,
               private initializeService: InitializeService,
               private dataStoreService: DataStoreService) { }

  // TODO: Fix issue where calendar observable is being overwritten by observable used here for the calendar filters.
  ngOnInit() {
    this.calendars$ = this.dataStoreService.calendars$;

    this.calendarsForm = this.fb.group({
      calendars: []
    });

    this.initializeService.calendarsFilter$.subscribe(value => {
      this.checked = value;
      this.selectedCalendars.length = 0;
      this.dataStoreService.setCalendarsFilter(this.selectedCalendars);
    } );
  }

  onChanges() {
    this.checkboxes.isChecked = this.checked;
  }

  filterEvents(selection) {

    if ( _.indexOf(this.selectedCalendars, selection) === -1) {

      this.selectedCalendars.push(selection);
    } else {
      _.remove(this.selectedCalendars, type => type === selection);
    }

    this.dataStoreService.setCalendarsFilter(this.selectedCalendars);
  }


}
