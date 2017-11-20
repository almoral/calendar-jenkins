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

  private filterYear: string;
  private filterMonth: string;
  private filterDay: number;
  public selectedDate: string;
  private years: string[] = ['2014', '2015', '2016', '2017', '2018'];
  // We can use the months function but it's deprecated in momentjs v2.0.
  private months: string[] = moment.months();
  private days$: Observable<number[]>;

  constructor( private dateService: DateService ) {}

  ngOnInit() {

    // Initial values used to populate dropdowns in date filter.
    this.filterYear = moment().format(DateService.YEAR_FORMAT);
    this.filterMonth = moment().format(DateService.MONTH_FORMAT);
    this.days$ = Observable.of(this.dateService.getNumberOfDays(this.filterYear, this.filterMonth));
  }

  /**
   * updateDays calculates and returns the number of days in the selected month
   * @param year - selected year.
   * @param month - selected month.
   */
  public updateDays(year: string, month: string): void {
    this.days$ = Observable.of(this.dateService.getNumberOfDays(year, month));
  }


}
