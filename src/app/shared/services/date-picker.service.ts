import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DatePickerService {

  constructor() { }

  public _yearSubject = new BehaviorSubject<Number>(null);
  // public year$: Observable<Number> = this._yearSubject.asObservable();

  public _monthSubject = new BehaviorSubject<Number>(null);
  // public month$: Observable<Number> = this._monthSubject.asObservable();

  public _daySubject = new BehaviorSubject<Number>(null);
  // public day$: Observable<Number> = this._daySubject.asObservable();


  setYearSubject(value) {
    this._yearSubject.next(value);
  }

  setMonthSubject(value) {
    this._monthSubject.next(value);
  }

  setDaySubject(value) {
    this._daySubject.next(value);
  }


}
