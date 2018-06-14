import {Component, OnInit} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import {MdcEventsByDate} from '../shared/models/mdc-event';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import * as _ from 'lodash';

@Component({
  selector: 'mdc-calendar-event-list',
  templateUrl: './calendar-event-list.component.html',
  styleUrls: ['./calendar-event-list.component.css']
})
export class CalendarEventListComponent implements OnInit {

  events$: Observable<MdcEventsByDate[]>;
  displayFullView = environment.displayFullView;
  numberOfEventsToDisplay = environment.numberOfEventsToDisplayInCompactMode;
  linkToMoreEvents = environment.linkToMoreEvents;
  page = 1;

  constructor(private dataStore: DataStoreService) { }

  ngOnInit() {

    if ( !this.displayFullView ) {
      // The right side calendar only displays events for a single day.
      this.events$ = this.dataStore.eventsInSelectedDate$
      // This filters out the events while they are undefined.
        .filter( events => !_.isNil(events[0]))
        // This limits the number of events to the number specified by COM.
        .map( (events: MdcEventsByDate[]): MdcEventsByDate[] => {
            events[0].events = events[0].events.slice(0, this.numberOfEventsToDisplay);
            return events;
        });
    } else {
      this.events$ = this.dataStore.eventsInSelectedDate$;
    }

  }
}
