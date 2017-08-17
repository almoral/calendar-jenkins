import {Component, Input, OnInit} from '@angular/core';
import { EventsDataService } from '../events-data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  @Input() selectedDepartment: string;

  constructor(private events: EventsDataService) { }

  ngOnInit() {
    this.events.getEventsFromCalendar();

    if(window['selectedDepartment']){
      this.selectedDepartment = window['selectedDepartment'];
    }

  }

}
