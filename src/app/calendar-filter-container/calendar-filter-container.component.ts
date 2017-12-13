import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'mdc-calendar-filter-container',
  templateUrl: './calendar-filter-container.component.html',
  styleUrls: ['./calendar-filter-container.component.css']
})
export class CalendarFilterContainerComponent implements OnInit {

  isActive = false;

  constructor() { }

  openModal() {
    this.isActive = true;
  }
  closeModal() {
    this.isActive = false;
  }

  ngOnInit() {
  }

}
