import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Calendar} from '../models/calendar';
import {environment} from '../../../environments/environment';

@Injectable()
export class CalendarDataService {

  constructor() { }


  getCalendars(): Observable<Array<Calendar>> {

    return Observable.of(environment.calendars)
      .map((calendar: any) => {
        // Mapping over elements in response array and creating object to populate filters.
        const calendars: Calendar = calendar.map( r => {
          return {
            value: r,
            label: r
          };
        });

        return calendars;
      })
      .catch(error => {
        console.error('ERROR: ', error);
        return error;
      });
  }

}
