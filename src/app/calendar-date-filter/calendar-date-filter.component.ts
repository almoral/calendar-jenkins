import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';
import {DateService} from '../shared/services/date.service';
import * as _ from 'lodash';


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
    this.dateService.setYear(this.selectedYear);
    this.dateService.setMonth(this.selectedMonth);
    this.dateService.setDay(this.selectedDay);
  }

}
