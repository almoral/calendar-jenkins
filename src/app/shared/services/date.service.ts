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

  private yearSubject = new BehaviorSubject<string>(null);
  private monthSubject = new BehaviorSubject<string>(null);
  private daySubject = new BehaviorSubject<string>(null);
  private numberOfDaysSubject = new BehaviorSubject<string[]>([]);


  // Creating observables as getters to keep the subjects private.
  year$ = this.yearSubject.asObservable();
  month$ = this.monthSubject.asObservable();
  day$ = this.daySubject.asObservable();
  numberOfDaysInMonth$ = this.numberOfDaysSubject.asObservable();


  setYear(value) {
    this.yearSubject.next(value);
  }

  setMonth(value) {
    this.monthSubject.next(value);
  }

  setDay(value) {
    this.daySubject.next(value);
  }


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


  constructor( private dataStoreService: DataStoreService,
               private configurationService: ConfigurationService) {

    this.initializeService();
  }

  public initializeService() {

    this.setYear(moment().format(DateService.YEAR_FORMAT));
    this.setMonth(moment().format(DateService.MONTH_FORMAT));
    this.getNumberOfDays(this.yearSubject.getValue(), this.monthSubject.getValue());
    this.initializeDay();
  }

  public initializeDay() {

    if (this.configurationService.dateFilterType === 'day') {
      this.setDay(moment().format('D'));
    } else {
      this.setDay('');
    }

  }

  public getSelectedMonth(): string {
    return this.monthSubject.getValue();
  }

  public getSelectedYear(): string {
    return this.yearSubject.getValue().toString();
  }

  public getSelectedDay(): string {
    return this.daySubject.getValue();
  }

  public getFormattedDate(): string {
    const year = this.getSelectedYear();
    const month = this.getSelectedMonth();
    const day = this.getSelectedDay();
    return moment().year(parseInt(year, 10)).month(month).date(parseInt(day, 10)).format('YYYY-MM-DD');
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
   * getNumberOfDays calculates the number of days in a given month.
   * @param year - selected year.
   * @param month - selected month.
   */
  public getNumberOfDays(year: string, month: string) {
    const newNumberOfDays: number = moment().year(parseInt(year, 10)).month(month).daysInMonth();
    this.numberOfDaysSubject.next(this.generateDaysInMonth(newNumberOfDays));
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

    const filterDate = moment().year(parseInt(year, 10)).month(month).date(parseInt(day, 10)).format('MM/DD/YYYY');
    this.dataStoreService.getEvents(new Date(filterDate), new Date(filterDate));
  }

  /**
   * filterByMonth generates the date value for a search by  month.
   * It then passes the date to the getEvents function in the dataStoreService.
   * @param year - selected year.
   * @param month - selected month.
   */
  public filterByMonth(year: string, month: string): void {
    this.getNumberOfDays(year, month);
    const numberOfDays = this.numberOfDaysSubject.getValue();
    const fromDate = moment().year(parseInt(year, 10)).month(month).date(1).format('MM/DD/YYYY');
    const toDate = moment().year(parseInt(year, 10)).month(month).date(numberOfDays.length).format('MM/DD/YYYY');

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

    fromDate = moment(fromDate, 'MM/D/YYYY').format('MM/DD/YYYY');
    toDate = moment(toDate, 'MM/D/YYYY').format('MM/DD/YYYY');

    this.dataStoreService.getEvents(new Date(fromDate), new Date(toDate));

  }

  /**
   * filterEventsByDate generates the date value for a search by year.
   * It then passes the date to the getEvents function in the dataStoreService.
   */
  public filterEventsByDate() {

    const year = this.yearSubject.getValue();
    const month = this.monthSubject.getValue();
    const day = this.daySubject.getValue();

    if (day === '' && month === '') {
      this.filterByYear(year);
    }
    if (month !== '' && day === '') {
      this.filterByMonth(year, month);
    }
    if (day !== '' && month !== '') {
      this.filterByDate(year, month, day);
    }
  }

  updateDateAndGetEvents(newDate: string) {
    // Update the state to match the new value based on the direction the user chose.
    this.setYear(moment(newDate).format('YYYY'));
    this.setMonth(moment(newDate).format('MMMM'));
    this.setDay(moment(newDate).format('D'));

    this.getNumberOfDays(this.yearSubject.getValue(), this.monthSubject.getValue());

    this.filterEventsByDate();
  }

  filterEventsByNextDate() {
    const newDate = moment().year(parseInt(this.yearSubject.getValue(), 10)).month(this.monthSubject.getValue()).date(parseInt(this.daySubject.getValue(), 10)).add(1, 'days').format();
    this.updateDateAndGetEvents(newDate);
  }

  filterEventsByPreviousDate() {
    const newDate = moment().year(parseInt(this.yearSubject.getValue(), 10)).month(this.monthSubject.getValue()).date(parseInt(this.daySubject.getValue(), 10)).subtract(1, 'days').format();
    this.updateDateAndGetEvents(newDate);
  }

  filterEventsByCurrentDate() {

    this.setYear(moment().format(DateService.YEAR_FORMAT));
    this.setMonth(moment().format(DateService.MONTH_FORMAT));
    this.setDay(moment().format(DateService.DAY_FORMAT));

    this.filterEventsByDate();
  }

}
