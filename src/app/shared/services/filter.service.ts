import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DateService} from './date.service';
import * as _ from 'lodash';
import {DataStoreService} from './data-store.service';


@Injectable()
export class FilterService {



  constructor(private dateService: DateService,
              private dataStoreService: DataStoreService) { }

  private title = new BehaviorSubject<string>(null);


  selectedCategories: Array<string> = [];
  selectedCalendars: Array<string> = [];


  // Creating observables as getters to keep the subjects private.
  year$ = this.year.asObservable();
  month$ = this.month.asObservable();
  day$ = this.day.asObservable();

  title$ = this.title.asObservable();


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

  public filterCalendars(selection: string) {

    if ( _.indexOf(this.selectedCalendars, selection) === -1) {

      this.selectedCalendars.push(selection);
    } else {
      _.remove(this.selectedCalendars, type => type === selection);
    }

    this.dataStoreService.setCalendarsFilter(this.selectedCalendars);
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

}
