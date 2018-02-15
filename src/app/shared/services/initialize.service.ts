import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DateService} from './date.service';

@Injectable()
export class InitializeService {

  private categoriesFilterSubject = new BehaviorSubject<boolean>(null);
  private typesFilterSubject = new BehaviorSubject<boolean>(null);
  private calendarsFilterSubject = new BehaviorSubject<boolean>(null);
  private titleSubject = new BehaviorSubject<string>('');


  calendarsFilter$ = this.calendarsFilterSubject.asObservable();
  categoriesFilter$ = this.categoriesFilterSubject.asObservable();
  typesFilter$ = this.typesFilterSubject.asObservable();

  title$ = this.titleSubject.asObservable();

  constructor( private dateService: DateService) { }

  setTitle(value) {
    this.titleSubject.next(value);
  }


  public reset() {

    // Reset the title.
    this.setTitle('');

    // Reset the date filter.
    this.dateService.initializeService();

    // Reset the categories checkboxes.
    if (this.categoriesFilterSubject.getValue() === false) {
      this.categoriesFilterSubject.next(null);
    } else {
      this.categoriesFilterSubject.next(false);
    }

    // Reset the types checkboxes.
    if (this.typesFilterSubject.getValue() === false) {
      this.typesFilterSubject.next(null);
    } else {
      this.typesFilterSubject.next(false);
    }

    // Reset the calendar checkboxes.
    if (this.calendarsFilterSubject.getValue() === false) {
      this.calendarsFilterSubject.next(null);
    } else {
      this.calendarsFilterSubject.next(false);
    }

  }

}
