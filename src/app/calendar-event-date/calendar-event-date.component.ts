import {Component, NgModule, OnInit, Input} from '@angular/core';
import {MdcEventsByDate} from "../shared/models/mdc-event";

@NgModule({

})

@Component({
  selector: 'mdc-calendar-event-date',
  templateUrl: 'calendar-event-date.component.html',
  styleUrls: ['calendar-event-date.component.css']
})
export class CalendarEventDateComponent implements OnInit {



  @Input()
  eventDateCollection: MdcEventsByDate;

  constructor() { }

  ngOnInit() {

  }

}
