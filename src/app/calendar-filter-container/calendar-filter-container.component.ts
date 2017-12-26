import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import {FilterService} from '../shared/services/filter.service';
import {DateService} from '../shared/services/date.service';
import * as moment from 'moment';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'mdc-calendar-filter-container',
  templateUrl: 'calendar-filter-container.component.html',
  styleUrls: ['calendar-filter-container.component.css']
})
export class CalendarFilterContainerComponent implements OnInit {

  isActive = false;
  categories: boolean[];
  year = '';
  month = '';
  day = '';


  constructor(private dataStoreService: DataStoreService,
              private filterService: FilterService) { }

  openModal() {
    this.isActive = true;
  }

  closeModal() {
    this.submitValues();
  }

  submitValues() {
    this.filterService.year$.subscribe( year => this.year = year );
    this.filterService.month$.subscribe( month => this.month = month );
    this.filterService.day$.subscribe( day => this.day = day );
    this.filterService.filterEventsByDate(this.year, this.month, this.day);

    this.isActive = false;
  }

  ngOnInit() {
  }

  resetValues() {

    // This handles resetting the title.
    this.filterService.setTitleSubject('tarantula');

    // These handle resetting the date filter.
    this.filterService.setYearSubject(moment().format(DateService.YEAR_FORMAT));
    this.filterService.setMonthSubject(moment().format(DateService.MONTH_FORMAT));
    if (environment.dateFilterType === 'day') {
      this.filterService.setDaySubject(moment().format('D'));
    } else {
      this.filterService.setDaySubject('');
    }

    // This handles the checkboxes

  }

}
