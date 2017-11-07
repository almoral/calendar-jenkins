import {Component, OnInit, Input} from '@angular/core';
import {MdcEvent} from "../shared/models/mdc-event";

@Component({
  selector: 'mdc-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent implements OnInit {

  @Input()
  event: MdcEvent;


  constructor() { }

  ngOnInit() {
  }

}
