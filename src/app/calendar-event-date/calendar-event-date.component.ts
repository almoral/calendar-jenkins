import {Component, NgModule, OnInit} from '@angular/core';
import {DataStoreService} from "../shared/services/data-store.service";
import {Observable} from "rxjs";
import {MdcEvent} from "../shared/models/mdc-event";

@NgModule({

})

@Component({
  selector: 'mdc-calendar-event-date',
  templateUrl: './calendar-event-date.component.html',
  styleUrls: ['./calendar-event-date.component.css']
})
export class CalendarEventDateComponent implements OnInit {

  events$: Observable<MdcEvent[]>;
  constructor(private dataStore: DataStoreService) { }

  ngOnInit() {

    this.events$ = this.dataStore.events$;

  }

}
