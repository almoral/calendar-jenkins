import {Component, OnInit} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import {MdcEventsByDate} from '../shared/models/mdc-event';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {share} from 'rxjs/operators';


@Component({
  selector: 'mdc-calendar-event-list',
  templateUrl: './calendar-event-list.component.html',
  styleUrls: ['./calendar-event-list.component.css']
})
export class CalendarEventListComponent implements OnInit {

  events$: Observable<MdcEventsByDate[]>;
  eventsSubject = new Subject<MdcEventsByDate[]>();
  page = 1;
  eventsAreLoading = true;

  constructor(private dataStore: DataStoreService) { }

  ngOnInit() {

    const sharedEvents = this.dataStore.eventsByDate$.pipe(share());

    this.events$ = sharedEvents;

    sharedEvents.subscribe( events => {
      this.eventsSubject.next(events);
    });

    this.eventsSubject.subscribe( events => {
      if (events.length > 0) {
        console.log('events date in events subject: ', events);
        this.eventsSubject.complete();
      }
    },
      error => console.log('error: ', error),
      () => {
      console.log('***************Events Subject completed!!');
      this.eventsAreLoading = false;
      });

  }

}
