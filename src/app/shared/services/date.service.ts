import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import 'rxjs/add/observable/of';
import { DataStoreService } from './data-store.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {ConfigurationService} from "./configuration.service";
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DateService {


  // Different date formats defined as constants in the date service.

  public static get DAY_FORMAT(): string {
    return'DD';
  }
  public static get MONTH_FORMAT(): string {
   return'MMMM';
  }
  public static get YEAR_FORMAT(): string {
    return 'YYYY';
  }
  public static get YEAR_AND_MONTH_FORMAT(): string {
    return 'YYYY-MMMM';
  }

  public static get CURRENT_DATE_FORMAT(): string {
    return 'YYYY-MMMM-DD';
  }

  public static get DATE_PARAM_FORMAT(): string {
    return 'M/D/YYYY';
  }

  public getCurrentYear(): string {
    return moment().format(DateService.YEAR_FORMAT);
  }

  public getCurrentMonth(): string {
    return moment().format(DateService.MONTH_FORMAT);
  }

  public getCurrentDay(): string {
    return moment().format(DateService.DAY_FORMAT);
  }


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
   * generateDaysInMonth returns a new array that contains
   * a list of items equal to the number passed in as a parameter.
   * The items are numbers equal to the current value in the parameter plus one.
   * @param daysInMonth - number of days.
   */
  public generateDaysInMonth(daysInMonth: number): string[] {
    const arrDays: string[] = [];
    _.times(daysInMonth, function(i){
      let entry: number = i + 1;
      arrDays.push(entry.toString());
    });
    return arrDays;
  }

}
