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


  title$ = this.title.asObservable();



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


}
