import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ConfigurationService} from "./configuration.service";
import {Option} from "../models/option";
import * as _ from 'lodash';

@Injectable()
export class CalendarDataService {

  constructor(private configurationService: ConfigurationService) { }


  getCalendars(): Observable<Option[]> {

    return Observable.of(this.configurationService.calendars)
      .map((response: any) => {

        return this.jsonToCalendars(response);
      })
      .catch(error => {
        console.error('getCalendars: error while getting list of calendars: ', error);
        return Observable.of([]);
      });
  }


  /**
   * maps the raw array of json calendars into an array
   * of options. If any of the elements in the
   * array can not be mapped, it is ignored.
   * @param response - Response object containing a body equal to json array representing raw calendars
   * @returns {Array<Option>} Converted response into an array
   * of Option Objects.
   */
  private jsonToCalendars = (response: any) => {
    if (_.isEmpty(response)) {
      return null;
    }
    const raw: Array<any> = response;
    const model: Array<Option> = raw.reduce(function (accumulator, item) {
      const option = new Option(item, item);

      if (option) {
        accumulator.push(option);
      }
      return accumulator;
    }, []);

    if (model.length === 0) {
      return null;
    }

    return model;
  }


}
