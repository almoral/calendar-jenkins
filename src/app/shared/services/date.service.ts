import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import {environment} from '../../../environments/environment';

@Injectable()
export class DateService {

  public monthFormat: string = environment.monthFormat;

  constructor() { }

  public getDaysInMonth(selectedMonth?: string){
    let selection = _.isNil(selectedMonth) ? '' : selectedMonth;
    let daysInMonth = moment(selection).daysInMonth();
    return this.generateDaysInMonth(daysInMonth);
  }

  public createDate(year: number, month: number): string{
    return year.toString() + '-' + month.toString();
  }

  private generateDaysInMonth(daysInMonth: number): number[] {
    let arrDays: number[] = [];
    _.times(daysInMonth, function(i){
      arrDays.push(i + 1);
    });
    return arrDays;
  }

  public getNumberOfDays(selectedDate: string): number[] {
    let newNumberOfDays: number = moment(selectedDate, environment.dateFormatFull).daysInMonth();
    let days: number[] = this.generateDaysInMonth(newNumberOfDays);
    return days;
  }
}
