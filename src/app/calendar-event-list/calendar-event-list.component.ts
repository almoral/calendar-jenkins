import { Component, OnInit } from '@angular/core';
import {DataStoreService} from "../shared/services/data-store.service";
import {MdcEvent} from "../shared/models/mdc-event";
import {Observable} from "rxjs";

@Component({
  selector: 'mdc-calendar-event-list',
  templateUrl: './calendar-event-list.component.html',
  styleUrls: ['./calendar-event-list.component.css']
})
export class CalendarEventListComponent implements OnInit {

  events$: Observable<{date: Date, events: MdcEvent[]}[]>;

  constructor(private dataStore: DataStoreService) { }

  ngOnInit() {

    this.events$ = this.dataStore.events$;

  }
}
