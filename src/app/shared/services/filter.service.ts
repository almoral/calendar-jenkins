import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DateService} from './date.service';

@Injectable()
export class FilterService {

  constructor(private dateService: DateService) { }

  private yearSubject = new BehaviorSubject<string>(null);
  private monthSubject = new BehaviorSubject<string>(null);
  private daySubject = new BehaviorSubject<string>(null);


  private titleSubject = new BehaviorSubject<string>(null);
  private categorySubject = new BehaviorSubject<Array<string>>(['']);
  private calendarSubject = new BehaviorSubject<Array<string>>(['']);

  year$ = this.yearSubject.asObservable();
  month$ = this.monthSubject.asObservable();
  day$ = this.daySubject.asObservable();
  title$ = this.titleSubject.asObservable();
  categories$ = this.categorySubject.asObservable();
  calendars$ = this.calendarSubject.asObservable();

  setYearSubject(value) {
    this.yearSubject.next(value);
  }

  setMonthSubject(value) {
    this.monthSubject.next(value);
  }

  setDaySubject(value) {
    this.daySubject.next(value);
  }

  setTitleSubject(value) {
    this.titleSubject.next(value);
  }

  setCategoriesValue(value) {
    this.categorySubject.next(value);
  }

  setCalendarsValue(value) {
    this.calendarSubject.next(value);
  }

  public filterEventsByDate(year: string, month: string = '', day: string = '') {

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


}
