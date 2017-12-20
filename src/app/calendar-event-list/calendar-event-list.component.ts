import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import {MdcEvent, MdcEventsByDate} from '../shared/models/mdc-event';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'mdc-calendar-event-list',
  templateUrl: './calendar-event-list.component.html',
  styleUrls: ['./calendar-event-list.component.css']
})
export class CalendarEventListComponent implements OnInit, OnDestroy {

  events$: Observable<MdcEventsByDate[]>;
  eventsLength = null;
  eventSubscription: Subscription;

  constructor(private dataStore: DataStoreService) { }

  ngOnInit() {
    this.events$ = this.dataStore.eventsByDate$;
    this.eventSubscription = this.events$.delay(600).subscribe( event => this.eventsLength = event.length);
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }
}
