import {Injectable, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DatePickerService implements OnInit{

  constructor() { }

  private _yearSubject = new BehaviorSubject<Number>(null);
  private _monthSubject = new BehaviorSubject<Number>(null);
  private _daySubject = new BehaviorSubject<Number>(null);


  @Input()
  set yearSubject(value) {
    this._yearSubject.next(value);
  }

  get yearSubject() {
    return this._yearSubject.getValue();
  }

  @Input()
  set monthSubject(value) {
    this._monthSubject.next(value);
  }

  get monthSubject() {
    return this._monthSubject.getValue();
  }

  @Input()
  set daySubject(value) {
    this._daySubject.next(value);
  }

  get daySubject() {
    return this._daySubject.getValue();
  }

  ngOnInit() {

  }


}
