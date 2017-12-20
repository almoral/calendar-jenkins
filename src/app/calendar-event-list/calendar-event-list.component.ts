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

  constructor(private dataStore: DataStoreService) { }

  ngOnInit() {
    this.events$ = this.dataStore.eventsByDate$;
  }

}
