import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataStoreService } from './data-store.service';

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

  public static get DATE_PARAM_FORMAT(): string {
    return 'M/D/YYYY';
  }

  constructor( private dataStoreService: DataStoreService) { }

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
  public getNumberOfDays(year: string, month: string): string[] {
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
  public generateDaysInMonth(daysInMonth: number): string[] {
    const arrDays: string[] = [];
    _.times(daysInMonth, function(i){
      let entry: number = i + 1;
      arrDays.push(entry.toString());
    });
    return arrDays;
  }

  /**
   * filterByDate generates the date value for a full date search.
   * It then passes the date to the getEvents function in the dataStoreService.
   * @param year - selected year.
   * @param month - selected month.
   * @param day - selected day.
   */
  public filterByDate(year: string, month: string, day: string): void {
    let filterDate: string = '' + month + '/' + day + '/' + year;

    this.dataStoreService.getEvents(new Date(filterDate), new Date(filterDate));
  }

  /**
   * filterByMonth generates the date value for a search by  month.
   * It then passes the date to the getEvents function in the dataStoreService.
   * @param year - selected year.
   * @param month - selected month.
   */
  public filterByMonth(year: string, month: string): void {
    let fromDate: string = month + '/1/' + year;
    let numberOfDays: string[] = this.getNumberOfDays(year, month);
    let toDate: string = month + '/' + numberOfDays.length.toString() + '/' + year;

    this.dataStoreService.getEvents(new Date(fromDate), new Date(toDate));

  }

  /**
   * filterByYear generates the date value for a search by year.
   * It then passes the date to the getEvents function in the dataStoreService.
   * @param year - selected year.
   */
  public filterByYear(year: string): void  {
    let fromDate: string = '1/1/' + year;
    let toDate: string = '12/31/' + year;

    this.dataStoreService.getEvents(new Date(fromDate), new Date(toDate));

  }

}
