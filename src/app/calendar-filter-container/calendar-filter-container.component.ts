import {InitializeService} from '../shared/services/initialize.service';
import {Component, OnInit} from '@angular/core';
import {DateService} from '../shared/services/date.service';
import {ConfigurationService} from "../shared/services/configuration.service";
import {Observable} from "rxjs";
import {DataStoreService} from "../shared/services/data-store.service";

@Component({
  selector: 'mdc-calendar-filter-container',
  templateUrl: 'calendar-filter-container.component.html',
  styleUrls: ['calendar-filter-container.component.css']
})

export class CalendarFilterContainerComponent implements OnInit{

  isActive = false;
  showCalendarsFilter = false;
  toggleTitleFilter = true;
  toggleDateFilter = true;
  toggleCategoryFilter = true;
  toggleCalendarFilter = true;

  categories$: Observable<string[]>;
  calendars$: Observable<string[]>;

  constructor(private dateService: DateService,
              private initializeService: InitializeService,
              private configurationService: ConfigurationService,
              private dataStoreService: DataStoreService) { }

  ngOnInit() {
    if (this.configurationService.showCalendarsFilter) {
      this.showCalendarsFilter = true;
    }

    this.categories$ = this.dataStoreService.categories$;
    this.calendars$ = this.dataStoreService.calendars$;

  }

  openModal() {
    this.isActive = true;
    this.toggleTitleFilter = false;
    this.toggleDateFilter = false;
    this.toggleCategoryFilter = false;
    this.toggleCalendarFilter = false;
  }

  closeModal() {
    this.submitValues();
    this.toggleTitleFilter = true;
    this.toggleDateFilter = true;
    this.toggleCategoryFilter = true;
    this.toggleCalendarFilter = true;
  }

  submitValues() {
    this.dateService.filterEventsByDate();
    this.isActive = false;
    this.toggleTitleFilter = true;
    this.toggleDateFilter = true;
    this.toggleCategoryFilter = true;
    this.toggleCalendarFilter = true;
  }

  resetValues() {
    this.initializeService.reset();
  }
}
