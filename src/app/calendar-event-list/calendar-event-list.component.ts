import {AfterContentInit, Component, OnInit} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import {MdcEvent, MdcEventsByDate} from '../shared/models/mdc-event';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'mdc-calendar-event-list',
  templateUrl: './calendar-event-list.component.html',
  styleUrls: ['./calendar-event-list.component.css']
})
export class CalendarEventListComponent implements OnInit {

  eventsSubject = new BehaviorSubject([]);
  events$: Observable<MdcEventsByDate[]> = this.eventsSubject.asObservable();
  page = 1;
  isLoading = new BehaviorSubject(true);
  loadStatus  = this.isLoading.asObservable();

  constructor(private dataStore: DataStoreService) { }

  ngOnInit() {

    this.dataStore.eventsByDate$
      .finally(() => {
        console.log('finally called!');
        this.isLoading.next(false);
      })
      .subscribe( events => {
      this.eventsSubject.next(events);
    },
      error => console.log('error occurred: ', error)
      );
  }

}
