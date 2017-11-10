import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/Rx';
import {MdcEventsByDate} from '../models/mdc-event';
import * as _ from 'lodash';
import {TestEvents} from '../models/test-events';
import {EventService} from "./event.service";



@Injectable()
export class DataStoreService {

  constructor(eventService: EventService) {

    this.initializeEventsList(eventService.eventsByDate(TestEvents.testEvents));

  }


  private eventsSubject = new BehaviorSubject([]);

  public events$: Observable<MdcEventsByDate[]> = this.eventsSubject.asObservable();

  initializeEventsList(newEvents: MdcEventsByDate[]) {
    this.eventsSubject.next(_.cloneDeep(newEvents));
  }

}
