import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as moment from 'moment';
import {DateService} from './date.service';
import {environment} from '../../../environments/environment';
import {FilterService} from './filter.service';

@Injectable()
export class InitializeService {

  private resetCategories = new BehaviorSubject<boolean>(null);
  private resetCalendars = new BehaviorSubject<boolean>(null);

  resetCalendars$ = this.resetCalendars.asObservable();
  resetCategories$ = this.resetCategories.asObservable();


  constructor( private filterService: FilterService) { }

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

    // This handles the categories checkboxes.
    if (this.resetCategories.getValue() === false) {
      this.resetCategories.next(null);
    } else {
      this.resetCategories.next(false);
    }
    // The behavior subject creates a pointer to the array so we can update the array and the subject will behave correctly.
      this.filterService.selectedCategories.length = 0;


  //  This handles the calendar checkboxes.
    if (this.resetCalendars.getValue() === false) {
      this.resetCalendars.next(null);
    } else {
      this.resetCalendars.next(false);
    }
    // The behavior subject creates a pointer to the array so we can update the array and the subject will behave correctly.
    this.filterService.selectedCalendars.length = 0;





  }

}
