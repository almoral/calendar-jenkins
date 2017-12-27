import {Component, OnInit} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import {FilterService} from '../shared/services/filter.service';


@Component({
  selector: 'mdc-calendar-filter-container',
  templateUrl: 'calendar-filter-container.component.html',
  styleUrls: ['calendar-filter-container.component.css']
})
export class CalendarFilterContainerComponent implements OnInit {

  isActive = false;
  categories: boolean[];


  constructor(private dataStoreService: DataStoreService,
              private filterService: FilterService) { }

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

  ngOnInit() {
  }

  resetValues() {

    this.filterService.reset();

  }

}
