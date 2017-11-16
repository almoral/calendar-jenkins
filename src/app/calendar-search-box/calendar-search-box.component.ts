import { Component, OnInit } from '@angular/core';
import {DataStoreService} from "../shared/services/data-store.service";
import {TestEvents} from "../shared/models/test-events";


@Component({
  selector: 'mdc-calendar-search-box',
  templateUrl: './calendar-search-box.component.html',
  styleUrls: ['./calendar-search-box.component.css']
})
export class CalendarSearchBoxComponent implements OnInit {

  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {
  }

  clickMe(){
    //this.dataStoreService.getEvents(null, null);
    this.dataStoreService.initializeEvents(TestEvents.testEvents);
  }

  clickYou(){
    this.dataStoreService.initializeEvents(TestEvents.testEventsSameDay_7_23_2017);
  }

}
