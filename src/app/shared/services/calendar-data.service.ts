import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import 'rxjs/Rx';
import * as _ from 'lodash';
import {Http, Response, Headers} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {MdcEvent} from "../models/mdc-event";

@Injectable()
export class CalendarDataService {

  constructor(
//    private http: Http,
    private httpClient: HttpClient,
    private configurationService: ConfigurationService
  ) { }


  /**
   * getEventsOnCalendar will get all the events belonging to a calendar
   * with id calendarId.
   * @param calendarId - The id of the calendar
   * @returns {null}
   */
  getEventsOnCalendar(calendarId: string) {//:Observable<MdcEvent[]>{

    let url:string = '/api/calendar/${calendarId}/events';

    this.httpClient.get(url).subscribe((data) =>{
      console.log(data['results']);
    });

  }

  // getEventsOnCalendar(calendarId: string):Observable<MdcEvent[]>{
  //
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //
  //   let url:string = '/api/calendars/:id/events';
  //   return this.http.get(url, {email,password}, headers)
  //     .map(res => res.json())
  //     .do(user => console.log(user))
  //     .do(user => this.subject.next(user))
  //     .publishLast().refCount();
  // }

  getEvents(): Observable<Object> {
    return null;
    // // return this.http.get(this.configurationService.urlMayor)
    // return this.http.get(this.configurationService.urlDevCalendar)
    //   .map((response: any) => {
    //     const events = this.jsonToEvents(response);
    //     // TODO: Add check to verify a valid object has been returned.
    //     if (!_.isNil(events)) {
    //       return events;
    //     }
    //   })
    //   .catch(error => {
    //     console.error('ERROR: ', error);
    //     return error;
    //   });
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
    const model: Array<MdcEvent> = raw.reduce(function (accumulator, item) {
      const event = MdcEvent.fromJSON(item);
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
