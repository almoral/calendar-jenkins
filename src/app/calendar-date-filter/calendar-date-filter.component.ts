import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';


@Component({
  selector: 'mdc-calendar-date-filter',
  templateUrl: './calendar-date-filter.component.html',
  styleUrls: ['./calendar-date-filter.component.css']
})

export class CalendarDateFilterComponent implements OnInit {

  @Input()
  filterYear: number;
  filterMonth: string;
  filterDay: number;

  private years: number[] = [2014, 2015, 2016, 2017, 2018];

  // We can use the months function but it's deprecated in v2.0.
  private months: string[] = moment.months();
  private days: number[];
  constructor() {}

  ngOnInit() {
    let daysInMonth: number = moment().daysInMonth();
    this.days = this.generateDaysInMonth(daysInMonth);
    this.filterYear = moment().year();
    this.filterMonth = moment().format('MMMM');
    this.filterDay = moment().date();
  }

  private generateDaysInMonth(daysInMonth: number): number[] {
    let arrDays: number[] = [];
    _.times(daysInMonth, function(i){
      arrDays.push(i + 1);
    });
    return arrDays;
  }

  private updateNumberOfDays(year: number, month: number): void {
    let newNumberOfDays: number = moment('' + year + '-' + month + '', 'YYYY-MMMM').daysInMonth();
    this.days = this.generateDaysInMonth(newNumberOfDays);
  }
}
