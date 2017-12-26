import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DateService} from './date.service';

@Injectable()
export class DatePickerService {

  constructor(private dateService: DateService) { }

  public yearSubject = new BehaviorSubject<string>(null);
  public monthSubject = new BehaviorSubject<string>(null);
  public daySubject = new BehaviorSubject<string>(null);

  setYearSubject(value) {
    this.yearSubject.next(value);
  }

  setMonthSubject(value) {
    this.monthSubject.next(value);
  }

  setDaySubject(value) {
    this.daySubject.next(value);
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
