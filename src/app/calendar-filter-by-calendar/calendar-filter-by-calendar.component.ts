import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DataStoreService} from '../shared/services/data-store.service';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import {FilterService} from '../shared/services/filter.service';
import {InitializeService} from '../shared/services/initialize.service';
import {CheckboxGroupComponent} from '../checkbox-group/checkbox-group.component';

@Component({
  selector: 'mdc-calendar-filter-by-calendar',
  templateUrl: './calendar-filter-by-calendar.component.html',
  styleUrls: ['./calendar-filter-by-calendar.component.css']
})
export class CalendarFilterByCalendarComponent implements OnInit {

  calendarsForm: FormGroup;
  public calendars$: Observable<string[]>;
  selectedCalendars: Array<string> = [];
  checked = false;

  @ViewChild(CheckboxGroupComponent) checkboxes: CheckboxGroupComponent;

  constructor( private dataStoreService: DataStoreService,
               private fb: FormBuilder,
               private filterService: FilterService,
               private initializeService: InitializeService) { }

  // TODO: Fix issue where calendar observable is being overwritten by observable used here for the calendar filters.
  ngOnInit() {
    this.calendars$ = this.dataStoreService.calendars$;

    this.calendarsForm = this.fb.group({
      calendars: []
    });

    this.initializeService.resetCalendars$.subscribe( value => this.checked = value );
  }

  onChanges() {
    this.checkboxes.isChecked = this.checked;
  }

  filterEvents(selection) {
    this.filterService.filterCalendars(selection);
  }


}
