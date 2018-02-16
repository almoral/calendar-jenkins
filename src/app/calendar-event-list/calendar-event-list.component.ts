import {Component, OnInit} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import {MdcEventsByDate} from '../shared/models/mdc-event';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as _ from 'lodash';


@Component({
  selector: 'mdc-calendar-event-list',
  templateUrl: './calendar-event-list.component.html',
  styleUrls: ['./calendar-event-list.component.css']
})
export class CalendarEventListComponent implements OnInit {

  events$: Observable<MdcEventsByDate[]>;
  eventsSubject = new BehaviorSubject([]);
  page = 1;

  constructor(private dataStore: DataStoreService) { }

  ngOnInit() {
    // this.events$ = this.dataStore.eventsByDate$;
    this.dataStore.eventsByDate$.subscribe( events => {
      this.events$ = Observable.of(events);
    },
      error => console.log('error: ', error),
      () => console.log('events loaded completely'));


  }

}
