import { Component, OnInit } from '@angular/core';
import {DateService} from '../shared/services/date.service';

@Component({
  selector: 'mdc-calendar-navigation',
  templateUrl: './calendar-navigation.component.html',
  styleUrls: ['./calendar-navigation.component.css']
})
export class CalendarNavigationComponent implements OnInit {

  constructor(private dateService: DateService) { }

  ngOnInit() {
  }

  filterEventsByNextDate() {
    this.dateService.filterEventsByNextDate();
  }

  filterEventsByPreviousDate() {
    this.dateService.filterEventsByPreviousDate();
  }

  filterEventsByCurrentDate() {
    this.dateService.filterEventsByCurrentDate();
  }

}
