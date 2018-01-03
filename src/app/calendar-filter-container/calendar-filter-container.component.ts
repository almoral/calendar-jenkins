import {Component, OnInit, ViewChild} from '@angular/core';
import {FilterService} from '../shared/services/filter.service';
import {InitializeService} from '../shared/services/initialize.service';
import {DataStoreService} from '../shared/services/data-store.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'mdc-calendar-filter-container',
  templateUrl: 'calendar-filter-container.component.html',
  styleUrls: ['calendar-filter-container.component.css']
})


export class CalendarFilterContainerComponent implements OnInit {

  isActive = false;
  resetCategories: boolean;
  private calendars$: Observable<string[]>;
  private categories$: Observable<string[]>;


  constructor(private filterService: FilterService,
              private initializeService: InitializeService,
              private dataStoreService: DataStoreService) { }

  ngOnInit() {
    this.initializeService.resetCategories$.subscribe(value => this.resetCategories = value);

    this.calendars$ = this.dataStoreService.calendars$;
    this.categories$ = this.dataStoreService.categories$;
  }

  openModal() {
    this.isActive = true;
  }

  closeModal() {
    this.submitValues();
  }

  submitValues() {
    this.filterService.filterEventsByDate();
    this.isActive = false;
  }

  resetValues() {
    this.initializeService.reset();
  }

}
