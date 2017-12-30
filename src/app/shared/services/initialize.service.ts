import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as moment from 'moment';
import {DateService} from './date.service';
import {environment} from '../../../environments/environment';
import {FilterService} from './filter.service';
import {DataStoreService} from './data-store.service';

@Injectable()
export class InitializeService {


  private resetCategories = new BehaviorSubject<boolean>(null);
  resetCategories$ = this.resetCategories.asObservable();

  setResetCategories (value) {
    this.resetCategories.next(value);
  }

  constructor( private filterService: FilterService,
               private dataStoreService: DataStoreService) { }

  public reset() {
    // This handles resetting the title.
    this.filterService.setTitle('');

    // These handle resetting the date filter.
    this.filterService.setYear(moment().format(DateService.YEAR_FORMAT));
    this.filterService.setMonth(moment().format(DateService.MONTH_FORMAT));
    if (environment.dateFilterType === 'day') {
      this.filterService.setDay(moment().format('D'));
    } else {
      this.filterService.setDay('');
    }

    // This handles the checkboxes. It looks like the subject in the data store is subscribed to this array?
    // if (this.selectedCategories.length > 0) {
    if (this.resetCategories.getValue() === false) {
      this.resetCategories.next(null);
    } else {
      this.resetCategories.next(false);
    }
      this.filterService.selectedCategories.length = 0;
      this.dataStoreService.setCategoriesFilter(this.filterService.selectedCategories);
      // this.resetCategories.next(null);
    // }


    // this.resetCategories.next(true);
  }

}
