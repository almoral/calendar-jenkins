import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import {Observable} from "rxjs";
import 'rxjs/Rx';
import * as _ from "lodash"
import {Http, Response} from "@angular/http";
import { MDCEvent } from "../models/MDCEvent";

@Injectable()
export class CalendarDataService {

  constructor(
    private http: Http,
    private configurationService: ConfigurationService
  ) { }

  getEvents(): Observable<Object>{
    return this.http.get(this.configurationService.urlMayor)
      .map((response: any) => {
        let events = this.jsonToEvents(response);
        //TODO: Add check to verify a valid object has been returned.
        return events;
      })
      .catch(error => {
        console.error('ERROR: ', error);
        return error;
      })
  };



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

    let raw: Array<any> = response.json().value;
    let model: Array<MDCEvent> = raw.reduce(function (accumulator, item) {
      let event = MDCEvent.fromJSON(item.fields);
      if (event) {
        accumulator.push(event);
      }
      return accumulator;
    }, []);

    if (model.length === 0) {
      return null;
    }

    return model;
  };



}
