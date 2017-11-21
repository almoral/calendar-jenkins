import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {DateService} from '../shared/services/date.service';
import {Observable} from 'rxjs/Observable';



@Component({
  selector: 'mdc-calendar-date-filter',
  templateUrl: './calendar-date-filter.component.html',
  styleUrls: ['./calendar-date-filter.component.css']
})

export class CalendarDateFilterComponent implements OnInit {

  private selectedYear: string;
  private selectedMonth: string;
  private selectedDay: number;
  public selectedDate: string;
  private years: string[] = ['2014', '2015', '2016', '2017', '2018'];
  // We can use the months function but it's deprecated in momentjs v2.0.
  private months: string[] = moment.months();
  private days$: Observable<string[]>;

  constructor( private dateService: DateService ) {}

  ngOnInit() {

    // Initial values used to populate dropdowns in date filter.
    this.selectedYear = moment().format(DateService.YEAR_FORMAT);
    this.selectedMonth = moment().format(DateService.MONTH_FORMAT);
    this.days$ = Observable.of(this.dateService.getNumberOfDays(this.selectedYear, this.selectedMonth));
  }

  /**
   * updateDays calculates and returns the number of days in the selected month
   * @param year - selected year.
   * @param month - selected month.
   */
  public updateDays(year: string, month: string): void {
    this.days$ = Observable.of(this.dateService.getNumberOfDays(year, month));
  }


  public filterEventsByDate(year: string, month: string = '', day: string = '') {

    if (day === '' && month === '') {
      this.dateService.filterByYear(year);
    }
    if (month !== '') {
      this.dateService.filterByMonth(year, month);
    }
    if (day !== '') {
      this.dateService.filterByDate(year, month, day);
    }

  }



}
