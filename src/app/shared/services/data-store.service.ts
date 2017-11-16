import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/Rx';
import {MdcEventsByDate, MdcEvent} from '../models/mdc-event';
import * as _ from 'lodash';
import {TestEvents} from '../models/test-events';
import {EventService} from "./event.service";
import {EventDataService} from "./event-data.service";



@Injectable()
export class DataStoreService {

  constructor(private eventService: EventService, private eventDataService: EventDataService) {
    //this.initializeEvents(TestEvents.testEvents);
    this.getEvents(null, null);
  }

  // observable collection of events.
  private eventsSubject = new BehaviorSubject([]);
  public events$: Observable<MdcEvent[]> = this.eventsSubject.asObservable();

  // observable collection of events grouped by date.
  private eventsByDateSubject = new BehaviorSubject([]);
  public eventsByDate$: Observable<MdcEventsByDate[]> = this.eventsByDateSubject.asObservable();


  /**
   * initializeEvents notifies those observers listening for new emision
   * of events$ and eventsByDate$.
   * eventsByDate$ will be derived from events$. At this initial point
   * both events$ and eventsByDate$ are in sync.
   * @param newEvents - The collection of MdcEvent[] representing
   * the master copy of events which will be emited at events$ and
   * its eventsByDate representation at eventsByDate$
   */
  initializeEvents(newEvents: MdcEvent[]) {
    this.eventsSubject.next(_.cloneDeep(newEvents));
    let eventsByDate = this.eventService.eventsByDate(newEvents);
    this.eventsByDateSubject.next(_.cloneDeep(eventsByDate));
  }

  /**
   * getEvents fetches all events falling between date:to and
   * date:from, and the state of hte store is initialized with
   * the fetched value.
   * @param to - start Date.
   * @param from - end Date.
   */
  getEvents(to:Date, from: Date) {
    //TODO: remove hardcoded calendar by configured set of calendars
    let events$:Observable<MdcEvent[]> = this.eventDataService.getEventsOnCalendar("ASD");
    events$.subscribe(events => this.initializeEvents(events));
    //TODO: what happens if an error comes. Who should handle displaying something ?
  }


}
