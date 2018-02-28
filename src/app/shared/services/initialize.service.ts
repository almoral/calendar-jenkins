import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DateService} from './date.service';
import {DataStoreService} from "./data-store.service";

@Injectable()
export class InitializeService {

  private titleSubject = new BehaviorSubject<string>('');


  title$ = this.titleSubject.asObservable();

  constructor( private dateService: DateService,
               private dataStoreService: DataStoreService) {
  }

  public reset() {

    // Reset the title.
    this.dataStoreService.setTitleFilter('');

    // Reset the date filter.
    this.dateService.initializeService();

    //resset the categories filter
    this.dataStoreService.setCategoriesFilter([]);

    //resset the types filter
    this.dataStoreService.setTypesFilter([]);

    //resset the calendars filter
    this.dataStoreService.setCalendarsFilter([]);

  }

}
