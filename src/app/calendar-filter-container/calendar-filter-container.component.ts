import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import {DatePickerService} from '../shared/services/date-picker.service';
import {DateService} from '../shared/services/date.service';
import * as moment from 'moment';
import {environment} from '../../environments/environment';

@Component({
  selector: 'mdc-calendar-filter-container',
  templateUrl: 'calendar-filter-container.component.html',
  styleUrls: ['calendar-filter-container.component.css']
})
export class CalendarFilterContainerComponent implements OnInit {

  isActive = false;
  titleText: string = null;
  categories: boolean[];


  constructor(private dataStoreService: DataStoreService,
              private datePickerService: DatePickerService) { }

  openModal() {
    this.isActive = true;
    this.titleText = null;
  }

  closeModal() {
    this.resetValues();
    this.isActive = false;
  }

  submitValues() {
    const year: string = this.datePickerService.yearSubject.getValue();
    const month: string = this.datePickerService.monthSubject.getValue();
    const day: string = this.datePickerService.daySubject.getValue();
    this.datePickerService.filterEventsByDate(year, month, day);

    this.isActive = false;
  }

  ngOnInit() {
  }

  resetValues() {
    this.dataStoreService.setTitleFilter('');
    this.titleText = null;
    this.datePickerService.setYearSubject(moment().format(DateService.YEAR_FORMAT));
    this.datePickerService.setMonthSubject(moment().format(DateService.MONTH_FORMAT));

    if (environment.dateFilterType === 'day') {
      this.datePickerService.setDaySubject(moment().format('D'));
    } else {
      this.datePickerService.setDaySubject('');
    }
  }

}
