import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';
import {Filter} from '../models/filter';
import {environment} from '../../../environments/environment';

@Injectable()
export class CalendarDataService {

  constructor( private httpClient: HttpClient,
               private configurationService: ConfigurationService
  ) { }


  getCalendars(): Observable<Array<Object>> {

    // return this.httpClient.get(this.configurationService.urlDepartments)
    return Observable.of(environment.calendars)
      .map((response: any) => {
        // const calendars = this.jsonToCalendars(response);

        // Mapping over elements in response array and creating object to populate filters.
        const calendars = response.map( r => {
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

  /**
   * maps the raw array of json topics into an array
   * of Filter Objects. If any of the elements in the
   * array can not be mapped, it is ignored.
   * @param response - Response object containing a body equal to json array representing raw topics
   * @returns {Array<Filter>} Converted response into an array
   * of Filter Objects. It will return an empty array if nothing
   * in the response could be converted to an Topic or the response hand an empty body.
   */
  private jsonToCalendars = (response: any) => {
    if (_.isEmpty(response)) {
      console.log('is empty');
      return null;
    }
    let raw: Array<any> = response;
    let model: Array<Filter> = raw.reduce(function (accumulator, item) {
      let calendar = Filter.fromJSON(item);

      if (calendar) {
        accumulator.push(calendar);
      }

      return accumulator;
    }, []);

    if (model.length === 0) {
      return null;
    }

    return model;
  }
}
