import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import 'rxjs/Rx';
import * as _ from 'lodash';
import {Http, Response} from '@angular/http';
import { MDCEvent } from '../models/MDCEvent';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CalendarDataService {

  constructor(
    private http: Http,
    private configurationService: ConfigurationService
  ) { }

  getEvents(): Observable<Object> {
    // return this.http.get(this.configurationService.urlMayor)
    return this.http.get(this.configurationService.urlDevCalendar)
      .map((response: any) => {
        const events = this.jsonToEvents(response);
        // TODO: Add check to verify a valid object has been returned.
        if (!_.isNil(events)) {
          return events;
        }
      })
      .catch(error => {
        console.error('ERROR: ', error);
        return error;
      });
  }



  /**
   * maps the raw array of json languages into an array
   * of Language Objects. If any of the elements in the
   * array can not be mapped, it is ignored.
   * @param response - Response object containing a body equal to json array representing raw languages
   * @returns {Array<Language>} Converted response into an array
   * of Language Objects. It will return an empty array if nothing
   * in the response could be converted to a Language or the response hand an empty body.
   */
  private jsonToEvents = (response: Response) => {
    if (_.isEmpty(response.json())) {
      return null;
    }

    const raw: Array<any> = response.json().events;
    const model: Array<MDCEvent> = raw.reduce(function (accumulator, item) {
      const event = MDCEvent.fromJSON(item);
      if (event) {
        accumulator.push(event);
      }
      return accumulator;
    }, []);

    if (model.length === 0) {
      return null;
    }

    return model;
  }



}
