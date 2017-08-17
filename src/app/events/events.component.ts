import {Component, Input, OnInit} from '@angular/core';
import { CalendarDataService } from '../shared/services/calendar-data.service';
import { MDCEvent }  from '../shared/models/MDCEvent';
import * as _ from 'lodash';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events: Array<MDCEvent> = [];

  @Input() selectedDepartment: string;

  constructor(private calendarDataService: CalendarDataService) { }

  ngOnInit() {

    this.calendarDataService.getEvents().subscribe((events: Array<MDCEvent>) => {

        this.events = events;
      },
      error => {
        console.error('ERROR: ', error.toString());
      });

    if(window['selectedDepartment']){
      this.selectedDepartment = window['selectedDepartment'];
    }

  }

}
