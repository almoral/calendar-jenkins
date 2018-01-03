import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DateService} from './date.service';


@Injectable()
export class FilterService {

  constructor(private dateService: DateService) { }

  private year = new BehaviorSubject<string>(null);
  private month = new BehaviorSubject<string>(null);
  private day = new BehaviorSubject<string>(null);


  // Creating observables as getters to keep the subjects private.
  year$ = this.year.asObservable();
  month$ = this.month.asObservable();
  day$ = this.day.asObservable();


  setYear(value) {
    this.year.next(value);
  }

  setMonth(value) {
    this.month.next(value);
  }

  setDay(value) {
    this.day.next(value);
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

}
