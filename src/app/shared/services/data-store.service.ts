import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/Rx';
import {MdcEventsByDate} from '../models/mdc-event';
import * as _ from 'lodash';
import {TestEvents} from '../models/test-events';



@Injectable()
export class DataStoreService {

  constructor() {

    this.initializeEventsList(TestEvents.testEventsByDate);

  }


  private eventsSubject = new BehaviorSubject([]);

  public events$: Observable<MdcEventsByDate[]> = this.eventsSubject.asObservable();

  initializeEventsList(newEvents: MdcEventsByDate[]) {
    this.eventsSubject.next(_.cloneDeep(newEvents));
  }

}
