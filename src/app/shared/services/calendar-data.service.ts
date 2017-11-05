import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ConfigurationService} from "./configuration.service";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {MdcEvent} from "../models/mdc-event";
import * as _ from "lodash";
import {Response} from "@angular/http";


/**
 * CalendarDataService is all about getting data
 * for the calendar from external source. More specifically
 * it encapsulates the http calls and mapping
 * to the model of the application.
 */

@Injectable()
export class CalendarDataService {

  constructor(
    private httpClient: HttpClient,
    private configurationService: ConfigurationService
  ) { }


  /**
   * getEventsOnCalendar will get all the events belonging to a calendar
   * with id calendarId.
   * @param calendarId - The id of the calendar
   * @returns {Observable<MdcEvent []>} - Success Observable array of MdcEvents
   * http 404 - No calendar found: Observable empty array.
   * Any other http error code will throw an observable exception.
   *
   */
  getEventsOnCalendar(calendarId: string): Observable<MdcEvent []> {

    let url: string = `/api/calendar/${calendarId}/events`;

    return this.httpClient.get(url)
      .map((rawEvents, index) => {
        let events = MdcEvent.fromJSONArray(rawEvents['events']);
        return events;
      }).catch((err: HttpErrorResponse) => {
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred.
          console.error('An error occurred:', err.error.message, err.error);
          return Observable.throw('client-side or network error occurred.');
        } else {
          // The backend returned an unsuccessful response code.
          switch (err.status) {
            case 404: {
              return Observable.of([]);
            }
            default: {
              console.log(`Error returned code ${err.status}, body was: ${err.error}`);
              return Observable.throw('Error ocurred: ' + err.status);
            }
          }
        }
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



}
