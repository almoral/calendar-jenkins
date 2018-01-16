import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Calendar} from '../models/calendar';
import {ConfigurationService} from "./configuration.service";

@Injectable()
export class CalendarDataService {

  constructor(private configurationService: ConfigurationService) { }


  getCalendars(): Observable<Calendar[]> {

    return Observable.of(this.configurationService.calendars)
      .map((calendar: any) => {
        // Mapping over elements in response array and creating object to populate filters.
        const calendars: Calendar = calendar.map( r => {
          return {
            value: r,
            label: r,
            picked: false
          };
        });

        return calendars;
      })
      .catch(error => {
        console.error('ERROR: ', error);
        return Observable.of(error);
      });
  }

}
