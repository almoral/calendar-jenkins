import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams, HttpHeaders} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {MdcEvent} from '../models/mdc-event';
import {forkJoin} from 'rxjs/observable/forkJoin';
import * as _ from 'lodash';
import * as moment from 'moment';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


/**
 * EventDataService is all about getting data
 * for the calendar from external source. More specifically
 * it encapsulates the http calls and mapping
 * to the model of the application.
 */

@Injectable()
export class EventDataService {


  constructor(private httpClient: HttpClient,
              private configurationService: ConfigurationService) {
  }

  /**
   * getEventsOnCalendar will get all the events belonging to a calendar
   * with id calendarId, that falls between dates to >> from. If no from
   * date is provided, from = to, which would be events for that specific date.
   * @param calendarId - The id of the calendar
   * @param to - starting date
   * @param from - end date
   * @returns {Observable<MdcEvent []>} - Success Observable array of MdcEvents
   * http 404 - No calendar found: Observable empty array.
   * Any other http error code will throw an observable exception.
   */
  getEventsOnCalendar(calendarId: string, from: Date, to: Date = from): Observable<MdcEvent []> {

    // Setup url.
    const url: string = this.configurationService.calendarUrls.eventsOnCalendarUrl(calendarId);
    const params = new HttpParams()
      .append('to', moment(to).format('MM/DD/YYYY'))
      .append('from', moment(from).format('MM/DD/YYYY'));

    // Setup header.
    // TODO: revisit and inspect headers in the Chrome console
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    // Build options object.
    const options = {headers, params};

    // Get events.
    return this.httpClient.get(url, {params})
      .map((rawEvents, index) => {
        const events = MdcEvent.fromJSONArray(rawEvents['events'], calendarId);
        return events;
      }).catch(this.eventOnCalendarErrorHandler);

  }


  /**
   * getEventsOnCalendars combines all events for all calendars in calendars,
   * that fall between dates to >> from
   * and returns an observable with single array with all events on it.
   * If calendars is null or [] an Observable of empty array will be passed in.
   * If an error is thrown by any of calendars, that calendar is ignored.
   * @param calendars - array of calendarIds to be fetched.
   * @param to - starting date
   * @param from - end date
   * @returns {any} - Observable<MdcEvent[] Observable with all events of all calendars
   * as a single array.
   */
  getEventsOnCalendars(calendars: string[], from: Date, to: Date = from): Observable<MdcEvent[]> {

    if (_.isEmpty(calendars)) {
      return Observable.of([]);
    }

    // call each calendar on calendars
    const events$: Array<Observable <MdcEvent[]> > = calendars.reduce((accumulator, calendarId) => {

      // push each observable into array and
      // handle errors by providing an empty array for that call.
      accumulator.push(this.getEventsOnCalendar(calendarId, from, to)
        .catch((error) => {
          console.error('getEventsOnCalendars: error while processing calendarId', calendarId);
          return Observable.of([]);
        }));
      return accumulator;
    }, []);

    // Wait for all calendar calls to complete and
    // then flatten the collections of events into one collection.
    return forkJoin(events$)
      .map((eventsByCalendar: Array<MdcEvent[]>): MdcEvent[] => {
        return _.flatten(eventsByCalendar);
      });
  }


  private eventOnCalendarErrorHandler = (err: HttpErrorResponse) => {
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
          console.error(`Error returned code ${err.status}, body was: ${err.error}`);
          return Observable.throw('Error ocurred: ' + err.status);
        }
      }
    }
  }

}
