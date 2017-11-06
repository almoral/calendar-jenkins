import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {MdcEvent} from "../models/mdc-event";
import * as _ from 'lodash';
import {testEvents} from "../models/test-events";


@Injectable()
export class DataStoreService {

  constructor() {

    this.initializeLessonsList(testEvents);

  }


  private eventsSubject = new BehaviorSubject([]);

  public events$: Observable<MdcEvent[]> = this.eventsSubject.asObservable();

  initializeLessonsList(newEvents: MdcEvent[]) {
    this.eventsSubject.next(_.cloneDeep(newEvents));
    //this.eventsSubject.next(testEvents);
  }

}
