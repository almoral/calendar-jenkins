import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DateService} from './date.service';
import {environment} from '../../../environments/environment';
import * as moment from 'moment';
import * as _ from 'lodash';
import {DataStoreService} from './data-store.service';

@Injectable()
export class FilterService {

  constructor(private dateService: DateService,
              private dataStoreService: DataStoreService) { }

  private year = new BehaviorSubject<string>(null);
  private month = new BehaviorSubject<string>(null);
  private day = new BehaviorSubject<string>(null);
  private title = new BehaviorSubject<string>(null);
  private checked = new BehaviorSubject<boolean>(false);

  selectedCategories: Array<string> = [];

  // Creating observables as getters to keep the subjects private.
  year$ = this.year.asObservable();
  month$ = this.month.asObservable();
  day$ = this.day.asObservable();
  title$ = this.title.asObservable();
  checked$ = this.checked.asObservable();

  setYear(value) {
    this.year.next(value);
  }

  setMonth(value) {
    this.month.next(value);
  }

  setDay(value) {
    this.day.next(value);
  }

  setTitle(value) {
    this.title.next(value);
  }

  setChecked(value) {
    this.checked.next(value);
  }

  public filterCategories(selection: string) {

    if ( _.indexOf(this.selectedCategories, selection) === -1) {
      this.selectedCategories.push(selection);
    } else {
       _.remove(this.selectedCategories, category => category === selection);
    }

    this.dataStoreService.setCategoriesFilter(this.selectedCategories);
  }

  public filterEventsByDate() {

    const year = this.year.getValue();
    const month = this.month.getValue();
    const day = this.day.getValue();

    if (day === '' && month === '') {
      this.dateService.filterByYear(year);
    }
    if (month !== '' && day === '') {
      this.dateService.filterByMonth(year, month);
    }
    if (day !== '' && month !== '') {
      this.dateService.filterByDate(year, month, day);
    }

  }

  public reset() {
    // This handles resetting the title.
    this.title.next('');

    // These handle resetting the date filter.
    this.year.next(moment().format(DateService.YEAR_FORMAT));
    this.month.next(moment().format(DateService.MONTH_FORMAT));
    if (environment.dateFilterType === 'day') {
      this.day.next(moment().format('D'));
    } else {
      this.day.next('');
    }

    // This handles the checkboxes
    this.selectedCategories.length = 0;
    this.checked.next(false);

  }


}
