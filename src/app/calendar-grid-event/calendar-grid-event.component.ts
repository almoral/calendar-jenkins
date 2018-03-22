import {Component, Input, OnInit} from '@angular/core';
import {MdcEvent} from '../shared/models/mdc-event';
import {IModalDialog} from 'ngx-modal-dialog';

@Component({
  selector: 'mdc-calendar-grid-event',
  templateUrl: './calendar-grid-event.component.html',
  styleUrls: ['./calendar-grid-event.component.css']
})
export class CalendarGridEventComponent implements OnInit, IModalDialog {

  @ Input()
  event: MdcEvent;


  constructor() { }

  ngOnInit() {
  }

  dialogInit() {}

  // openDialog() {}



}
