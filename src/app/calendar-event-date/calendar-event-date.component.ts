import {Component, NgModule, OnInit, Input} from '@angular/core';
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



  @Input()
  eventDateCollection: {date: Date, events: MdcEvent[]};

  constructor() { }

  ngOnInit() {

  }

}
