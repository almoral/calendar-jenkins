import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as moment from 'moment';
import {DateService} from './date.service';
import {environment} from '../../../environments/environment';
import {DataStoreService} from './data-store.service';

@Injectable()
export class InitializeService {

  private categoriesFilterSubject = new BehaviorSubject<boolean>(null);
  private calendarsFilterSubject = new BehaviorSubject<boolean>(null);
  private titleSubject = new BehaviorSubject<string>(null);


  calendarsFilter$ = this.calendarsFilterSubject.asObservable();
  categoriesFilter$ = this.categoriesFilterSubject.asObservable();

  title$ = this.titleSubject.asObservable();

  constructor( private dateService: DateService,
               private dataStoreService: DataStoreService) { }

  setTitle(value) {
    this.titleSubject.next(value);
  }


  public reset() {
    // This handles resetting the title.
    this.setTitle('');

    // These handle resetting the date filter.
    this.dateService.setYear(moment().format(DateService.YEAR_FORMAT));
    this.dateService.setMonth(moment().format(DateService.MONTH_FORMAT));
    if (environment.dateFilterType === 'day') {
      this.dateService.setDay(moment().format('D'));
    } else {
      this.dateService.setDay('');
    }

    // This handles the categories checkboxes.
    if (this.categoriesFilterSubject.getValue() === false) {
      this.categoriesFilterSubject.next(null);
    } else {
      this.categoriesFilterSubject.next(false);
    }
    // this.dataStoreService.setCategoriesFilter([]);


  //  This handles the calendar checkboxes.
    if (this.calendarsFilterSubject.getValue() === false) {
      this.calendarsFilterSubject.next(null);
    } else {
      this.calendarsFilterSubject.next(false);
    }
    // this.dataStoreService.setCalendarsFilter([]);

  }

}
