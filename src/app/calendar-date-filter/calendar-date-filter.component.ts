import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {DateService} from '../shared/services/date.service';
import * as _ from 'lodash';


@Component({
  selector: 'mdc-calendar-date-filter',
  templateUrl: './calendar-date-filter.component.html',
  styleUrls: ['./calendar-date-filter.component.css']
})

export class CalendarDateFilterComponent implements OnInit {

  public selectedYear: string;
  public selectedMonth: string;
  public selectedDay: string;
  public selectedDate: string;
  public years: string[] = ['2014', '2015', '2016', '2017', '2018'];
  // We can use the months function but it's deprecated in momentjs v2.0.
  public months: string[] = moment.months();
  public days: string[];
  public disableDayField = false;

  @Input() toggleContainer = true;

  constructor( private dateService: DateService) {}

  ngOnInit() {

    // Initial values used to populate dropdowns in date filter.
    this.dateService.year$.subscribe(year => this.selectedYear = year);
    this.dateService.month$.subscribe( month => this.selectedMonth = month);
    this.dateService.day$.subscribe( day => this.selectedDay = day);
    this.days = this.dateService.getNumberOfDays(this.selectedYear, this.selectedMonth);

    this.dateService.filterEventsByDate();
  }

  filterEventsByDate() {
    this.dateService.filterEventsByDate();
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
    this.updateServiceDate(this.selectedYear, this.selectedMonth, this.selectedDay);
  }

  private updateServiceDate (year: string, month: string, day: string): void {
    this.dateService.setYear(year);
    this.dateService.setMonth(month);
    this.dateService.setDay(day);
  }

  public getPreviousDay() {

    if (this.selectedDay === '') {
      this.selectedDay = '1';
    }

      const currentSelectedDate: string = this.selectedYear + '-' +  this.selectedMonth + '-' + this.selectedDay;

      const previousDate = moment(currentSelectedDate, 'YYYY-MMMM-DD').subtract(1, 'days').format();

      this.selectedYear = moment(previousDate).format('YYYY');
      this.selectedMonth = moment(previousDate).format('MMMM');
      this.selectedDay = moment(previousDate).format('DD');

      this.updateServiceDate(moment(previousDate).format('YYYY'), moment(previousDate).format('MMMM'), moment(previousDate).format('DD'));

      this.filterEventsByDate();
  }

  public getNextDay() {


    if (this.selectedDay === '') {
      this.selectedDay = '1';
    }

    const currentSelectedDate: string = this.selectedYear + '-' +  this.selectedMonth + '-' + this.selectedDay;

    const nextDate = moment(currentSelectedDate, 'YYYY-MMMM-DD').add(1, 'days').format();

    this.updateDays( moment(nextDate).format('YYYY'), moment(nextDate).format('MMMM'), moment(nextDate).format('DD'));

    this.updateServiceDate(moment(nextDate).format('YYYY'), moment(nextDate).format('MMMM'), moment(nextDate).format('DD'));

    this.filterEventsByDate();

  }

}
