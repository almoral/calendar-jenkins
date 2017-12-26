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

    // Setting the initial values for the date picker service.
    this.datePickerService.setYearSubject(moment().format(DateService.YEAR_FORMAT));
    this.datePickerService.setMonthSubject(moment().format(DateService.MONTH_FORMAT));

    // Initial values used to populate dropdowns in date filter.
    this.datePickerService.yearSubject.subscribe(year => this.selectedYear = year);
    this.datePickerService.monthSubject.subscribe( month => this.selectedMonth = month);
    this.days = this.dateService.getNumberOfDays(this.selectedYear, this.selectedMonth);



    // With 'day' configuration set also the current day.
    // Only the events for today will show
    if (environment.dateFilterType === 'day'){
      this.datePickerService.setDaySubject(moment().format('D'));
      this.datePickerService.daySubject.subscribe( day => this.selectedDay = day);

    }

    this.datePickerService.filterEventsByDate(this.selectedYear, this.selectedMonth, this.selectedDay);
  }

  filterEventsByDate() {

    this.datePickerService.filterEventsByDate(this.selectedYear, this.selectedMonth, this.selectedDay);

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
    this.updatePickerService(this.selectedYear, this.selectedMonth, this.selectedDay);
  }

  /**
   * updatePickerService updates the values in the picker service with the values from the picker fields.
   * @param year - selected year.
   * @param month - selected month.
   * @param day - selected day (optional)
   */
  private updatePickerService(year: string, month: string, day: string) {

    this.datePickerService.setYearSubject(year);
    this.datePickerService.setMonthSubject(month);
    this.datePickerService.setDaySubject(day);
  }

}
