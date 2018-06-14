import { Component, OnInit } from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'mdc-calendar-list-view',
  templateUrl: './calendar-list-view.component.html',
  styleUrls: ['./calendar-list-view.component.css']
})
export class CalendarListViewComponent implements OnInit {


  displayFullView = environment.displayFullView;

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
