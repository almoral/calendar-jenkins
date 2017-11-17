import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {DateService} from '../shared/services/date.service';



@Component({
  selector: 'mdc-calendar-date-filter',
  templateUrl: './calendar-date-filter.component.html',
  styleUrls: ['./calendar-date-filter.component.css']
})

export class CalendarDateFilterComponent implements OnInit {

  private filterYear: number;
  private filterMonth: string;
  private filterDay: number;
  private years: number[] = [2014, 2015, 2016, 2017, 2018];
  // We can use the months function but it's deprecated in momentjs v2.0.
  private months: string[] = moment.months();
  private days: number[];

  constructor( private dateService: DateService ) {}

  ngOnInit() {
    this.days = this.dateService.getDaysInMonth();
    this.filterYear = moment().year();
    this.filterMonth = moment().format(this.dateService.monthFormat);
  }

  public updateDays(year: number, month: number): void {
    let selectedDate = this.dateService.createDate(year, month);
    this.days = this.dateService.getNumberOfDays(selectedDate);
  }


}
