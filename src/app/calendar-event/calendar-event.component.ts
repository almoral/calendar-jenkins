import {Component, OnInit, Input} from '@angular/core';
import {MdcEvent} from '../shared/models/mdc-event';
import * as $ from 'jquery';

@ Component({
  selector: 'mdc-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent implements OnInit {

  @ Input()
  event: MdcEvent;


  constructor() { }

  ngOnInit() {
  }

  public showHide(event): void{

    $(event.currentTarget).next().slideToggle();
    $(event.currentTarget).toggleClass('active');

    // For ADA Compliance
    var expanded = $(event.currentTarget).next().attr('aria-expanded');

    if (expanded === 'true') {
      expanded = 'false';
    } else {
      expanded  = 'true';
    };

    $(event.currentTarget).next().attr('aria-expanded', expanded);
  }

}
