import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IMyDpOptions, IMyDate} from 'mydatepicker';
import {DataStoreService} from '../shared/services/data-store.service';
import * as _ from 'lodash';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'mdc-calendar-navigation',
  templateUrl: './calendar-navigation.component.html',
  styleUrls: ['./calendar-navigation.component.css']
})
export class CalendarNavigationComponent implements OnInit {

  pickerOptions: IMyDpOptions;
  selectedDate: IMyDate = {year: 0, month: 0, day: 0};

  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit() {

    this.dataStoreService.selectedDate$.subscribe(date => {
        this.selectedDate = {
          year: date.getFullYear(),
          month: date.getMonth() + 1,
          day: date.getDate()
        };
    });


    this.pickerOptions = {
      width: '250px',
      height: '40px'
    };
  }

  onDateChanged(event: any) {
    if (!_.isNil(event.jsdate)) {
      this.dataStoreService.setSelectedDate(event.jsdate);
    }
  }

  setSelectedDateToNextDate() {
    this.dataStoreService.setSelectedDateToNextDate();
  }

  setSelectedDateToPreviousDate() {
    this.dataStoreService.setSelectedDateToPreviousDate();
  }

  setSelectedDateToToday() {
    this.dataStoreService.setSelectedDateToToday();
  }

}
