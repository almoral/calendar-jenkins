import {Component, OnInit} from '@angular/core';
import {FilterService} from '../shared/services/filter.service';

@Component({
  selector: 'mdc-calendar-filter-container',
  templateUrl: 'calendar-filter-container.component.html',
  styleUrls: ['calendar-filter-container.component.css']
})
export class CalendarFilterContainerComponent implements OnInit {

  isActive = false;
  checkedValue = false;

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.filterService.isChecked$.subscribe( value => this.checkedValue = value);
  }

  openModal() {
    this.isActive = true;
  }

  closeModal() {
    this.submitValues();
  }

  submitValues() {
    this.filterService.filterEventsByDate();
    this.isActive = false;
  }

  resetValues() {
    this.filterService.reset();
  }

}
