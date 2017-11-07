import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/Rx';
import {MdcEvent} from '../models/mdc-event';
import * as _ from 'lodash';
import {testEvents} from '../models/test-events';



@Injectable()
export class DataStoreService {

  constructor() {

    this.initializeEventsList(testEvents.testEventsByDate);

  }


  private eventsSubject = new BehaviorSubject([]);

  public events$: Observable<{date: Date, events: MdcEvent[]}[]> = this.eventsSubject.asObservable();

  initializeEventsList(newEvents: {date: Date, events: MdcEvent[]}[]) {
    this.eventsSubject.next(_.cloneDeep(newEvents));
  }

}
