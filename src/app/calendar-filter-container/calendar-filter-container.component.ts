import {Component} from '@angular/core';
import {FilterService} from '../shared/services/filter.service';

@Component({
  selector: 'mdc-calendar-filter-container',
  templateUrl: 'calendar-filter-container.component.html',
  styleUrls: ['calendar-filter-container.component.css']
})

export class CalendarFilterContainerComponent {

  isActive = false;

  constructor(private filterService: FilterService) { }

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
}
