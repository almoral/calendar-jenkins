import {Component, OnInit, ViewChild} from '@angular/core';
import {FilterService} from '../shared/services/filter.service';
import {InitializeService} from '../shared/services/initialize.service';

@Component({
  selector: 'mdc-calendar-filter-container',
  templateUrl: 'calendar-filter-container.component.html',
  styleUrls: ['calendar-filter-container.component.css']
})


export class CalendarFilterContainerComponent implements OnInit {

  isActive = false;
  resetCategories: boolean;


  constructor(private filterService: FilterService,
              private initializeService: InitializeService) { }

  ngOnInit() {
    this.initializeService.resetCategories$.subscribe(value => this.resetCategories = value);
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
    this.initializeService.reset();
  }

}
