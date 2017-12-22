import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {DateService} from '../shared/services/date.service';
import * as _ from 'lodash';
import {environment} from '../../environments/environment';
import {DatePickerService} from '../shared/services/date-picker.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'mdc-calendar-date-filter',
  templateUrl: './calendar-date-filter.component.html',
  styleUrls: ['./calendar-date-filter.component.css']
})

export class CalendarDateFilterComponent implements OnInit {

  private selectedYear: string;
  private selectedMonth: string;
  private selectedDay: string;
  public selectedDate: string;
  private years: string[] = ['2014', '2015', '2016', '2017', '2018'];
  // We can use the months function but it's deprecated in momentjs v2.0.
  private months: string[] = moment.months();
  private days: string[];
  private disableDayField = false;


  constructor( private dateService: DateService,
               private datePickerService: DatePickerService) {}

  ngOnInit() {

    // Initial values used to populate dropdowns in date filter.
    this.selectedYear = moment().format(DateService.YEAR_FORMAT);
    this.selectedMonth = moment().format(DateService.MONTH_FORMAT);
    this.days = this.dateService.getNumberOfDays(this.selectedYear, this.selectedMonth);


    // With 'day' configuration set also the current day.
    // Only the events for today will show
    if(environment.dateFilterType === 'day'){
      this.selectedDay = moment().format('D');
    }

    this.filterEventsByDate(this.selectedYear, this.selectedMonth, this.selectedDay);
  }

  /**
   * updateValues updates the values in the picker fields with the values from the picker service.
   * @param year - selected year.
   * @param month - selected month.
   * @param day - selected day (optional)
   */
  public updateValues(year: string, month: string, day?: string): void {

    if (month === '' && !_.isUndefined(day)) {
      this.selectedDay = '';
      this.disableDayField = true;
    } else {
      this.disableDayField = false;
    }

    this.datePickerService.setYearSubject(this.selectedYear);
    this.datePickerService.setMonthSubject(this.selectedMonth);
    this.datePickerService.setDaySubject(this.selectedDay);

    this.days = this.dateService.getNumberOfDays(year, month);
  }

  /**
   * updateDays calculates and returns the number of days in the selected month
   * @param year - selected year.
   * @param month - selected month.
   * @param day - selected day (optional)
   */
  public updateDays(year: string, month: string, day?: string): void {

    if (month === '' && !_.isUndefined(day)) {
      this.selectedDay = '';
      this.disableDayField = true;
    } else {
      this.disableDayField = false;
    }

    this.days = this.dateService.getNumberOfDays(year, month);
  }


  public filterEventsByDate(year: string, month: string = '', day: string = '') {

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
