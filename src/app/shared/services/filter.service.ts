import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DateService} from './date.service';
import {environment} from '../../../environments/environment';
import * as moment from 'moment';

@Injectable()
export class FilterService {

  constructor(private dateService: DateService) { }

  private year = new BehaviorSubject<string>(null);
  private month = new BehaviorSubject<string>(null);
  private day = new BehaviorSubject<string>(null);


  private title = new BehaviorSubject<string>(null);
  private category = new BehaviorSubject<Array<string>>(['']);
  private calendar = new BehaviorSubject<Array<string>>(['']);

  year$ = this.year.asObservable();
  month$ = this.month.asObservable();
  day$ = this.day.asObservable();
  title$ = this.title.asObservable();
  categories$ = this.category.asObservable();
  calendars$ = this.calendar.asObservable();

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

  setCategories(value) {
    this.category.next(value);
  }

  setCalendars(value) {
    this.calendar.next(value);
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

  }


}
