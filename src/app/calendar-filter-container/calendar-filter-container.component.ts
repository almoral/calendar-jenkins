import {InitializeService} from '../shared/services/initialize.service';
import {Component, OnInit} from '@angular/core';
import {ConfigurationService} from '../shared/services/configuration.service';
import {Observable} from 'rxjs/Observable';
import {DataStoreService} from '../shared/services/data-store.service';

@Component({
  selector: 'mdc-calendar-filter-container',
  templateUrl: 'calendar-filter-container.component.html',
  styleUrls: ['calendar-filter-container.component.css']
})

export class CalendarFilterContainerComponent implements OnInit {

  isActive = false;
  showCalendarsFilter = false;
  toggleTitleFilter = false;
  toggleCategoryFilter = true;
  toggleTypeFilter = true;
  toggleCalendarFilter = true;

  categories$: Observable<string[]>;
  types$: Observable<string[]>;
  calendars$: Observable<string[]>;

  constructor(private initializeService: InitializeService,
              private configurationService: ConfigurationService,
              private dataStoreService: DataStoreService) { }

  ngOnInit() {
    if (this.configurationService.showCalendarsFilter) {
      this.showCalendarsFilter = true;
    }

    this.categories$ = this.dataStoreService.categories$;
    this.types$ = this.dataStoreService.types$;
    this.calendars$ = this.dataStoreService.calendars$;

  }

  openModal() {
    this.isActive = true;
    this.toggleTitleFilter = false;
    this.toggleCategoryFilter = false;
    this.toggleCalendarFilter = false;
    this.toggleTypeFilter = false;
  }

  closeModal() {
    this.toggleTitleFilter = true;
    this.toggleCategoryFilter = true;
    this.toggleTypeFilter = true;
    this.toggleCalendarFilter = true;
  }

  submitValues() {
    this.isActive = false;
    this.toggleTitleFilter = true;
    this.toggleCategoryFilter = true;
    this.toggleTypeFilter = true;
    this.toggleCalendarFilter = true;
  }

  resetValues() {
    this.initializeService.reset();
  }
}
