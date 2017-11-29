import { Component, OnInit } from '@angular/core';
import {DataStoreService} from "../shared/services/data-store.service";

@Component({
  selector: 'mdc-calendar-filter-by-title',
  templateUrl: 'calendar-filter-by-title.component.html',
  styleUrls: ['calendar-filter-by-title.component.css']
})
export class CalendarFilterByTitleComponent implements OnInit {

  constructor(private dataStoreService:DataStoreService ) {
  }

  ngOnInit() {
  }

  onKeyUp(value: string) {
    this.dataStoreService.setTitle(value);
  }


}
