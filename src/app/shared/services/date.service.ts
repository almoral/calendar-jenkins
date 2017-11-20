import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DateService {

  // Different date formats defined as constants in the date service.
  public static get MONTH_FORMAT(): string {
   return'MMMM';
  }
  public static get YEAR_FORMAT(): string {
    return 'YYYY';
  }
  public static get YEAR_AND_MONTH_FORMAT(): string {
    return 'YYYY-MMMM';
  }

  constructor() { }

  /**
   * createDateString concatenates the year and month that are passed in
   * and returns a string.
   * @param year - selected year.
   * @param month - selected month.
   */
  private static createDateString(year: string, month: string): string {
    return year + '-' + month;
  }

  /**
   * getNumberOfDays calculates the number of days in a given month.
   * @param year - selected year.
   * @param month - selected month.
   */
  public getNumberOfDays(year: string, month: string): number[] {
    let selectedDate = DateService.createDateString(year, month);
    let newNumberOfDays: number = moment(selectedDate, DateService.YEAR_AND_MONTH_FORMAT).daysInMonth();
    return this.generateDaysInMonth(newNumberOfDays);
  }

  /**
   * generateDaysInMonth returns a new array that contains
   * a list of items equal to the number passed in as a parameter.
   * The items are numbers equal to the current value in the parameter plus one.
   * @param daysInMonth - number of days.
   */
  private generateDaysInMonth(daysInMonth: number): number[] {
    const arrDays: number[] = [];
    _.times(daysInMonth, function(i){
      arrDays.push(i + 1);
    });
    return arrDays;
  }


}
