import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {MdcEvent} from "../models/mdc-event";
import * as _ from 'lodash';
import {testEvents} from "../models/test-events";



@Injectable()
export class DataStoreService {

  constructor() {

    this.initializeLessonsList(testEvents.testEventsByDate);

  }


  private eventsSubject = new BehaviorSubject([]);

  public events$: Observable<{date: Date, events: MdcEvent[]}[]> = this.eventsSubject.asObservable();

  initializeLessonsList(newEvents: {date: Date, events: MdcEvent[]}[]) {
    this.eventsSubject.next(_.cloneDeep(newEvents));
  }

}
