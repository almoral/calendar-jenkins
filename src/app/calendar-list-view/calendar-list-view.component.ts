import { Component, OnInit } from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';

@Component({
  selector: 'mdc-calendar-list-view',
  templateUrl: './calendar-list-view.component.html',
  styleUrls: ['./calendar-list-view.component.css']
})
export class CalendarListViewComponent implements OnInit {

  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {
  }


  setSelectedDateToNextDate() {
    this.dataStoreService.setSelectedDateToNextDate();
  }

  setSelectedDateToPreviousDate() {
    this.dataStoreService.setSelectedDateToPreviousDate();
  }


}
