import { Component, OnInit } from '@angular/core';
import {DataStoreService} from "../shared/services/data-store.service";

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
    this.dataStoreService.getEvents(null, null);
  }

}
