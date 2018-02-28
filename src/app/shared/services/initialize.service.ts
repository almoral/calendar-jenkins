import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DateService} from './date.service';
import {DataStoreService} from './data-store.service';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';

@Injectable()
export class InitializeService {

  private titleSubject = new BehaviorSubject<string>('');

  title$ = this.titleSubject.asObservable();

  constructor( private dateService: DateService,
               private dataStoreService: DataStoreService,
               private route: ActivatedRoute) {

    this.loadQueryParameters();
  }

  loadQueryParameters() {

    this.route.queryParams
      .subscribe( params => {

        this.dataStoreService.setTitleFilter(params.titleFilter || '');

        if (!_.isNil(params.eventTypesFilter)) {
          this.dataStoreService.setTypesFilter(params.eventTypesFilter.split(','));
        }

        if (!_.isNil(params.categoriesFilter)) {
          this.dataStoreService.setCategoriesFilter(params.categoriesFilter.split(','));
        }

        if (!_.isNil(params.departmentFilter)) {
          this.dataStoreService.setCategoriesFilter(params.departmentFilter.split(','));
        }
      });

  }


  public reset() {

    // Reset the title.
    this.dataStoreService.setTitleFilter('');

    // Reset the date filter.
    this.dateService.initializeService();

    // reset the categories filter
    this.dataStoreService.setCategoriesFilter([]);

    // reset the types filter
    this.dataStoreService.setTypesFilter([]);

    // reset the calendars filter
    this.dataStoreService.setCalendarsFilter([]);

  }

}
