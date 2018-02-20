import {Component, OnInit} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import {MdcEventsByDate} from '../shared/models/mdc-event';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'mdc-calendar-event-list',
  templateUrl: './calendar-event-list.component.html',
  styleUrls: ['./calendar-event-list.component.css']
})
export class CalendarEventListComponent implements OnInit {

  events$: Observable<MdcEventsByDate[]>;
  page = 1;
  eventsAreLoading = true;

  constructor(private dataStore: DataStoreService) { }

  ngOnInit() {
    this.dataStore.eventsByDate$.subscribe( events => {
      this.events$ = Observable.of(events);
      if (events.length > 0) {
        this.eventsAreLoading = false;
      }
    });

  }

}
