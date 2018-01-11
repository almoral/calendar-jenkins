import {InitializeService} from '../shared/services/initialize.service';
import {Component, OnInit} from '@angular/core';
import {DateService} from '../shared/services/date.service';
import {FilterState} from '../shared/models/filter-state';

@Component({
  selector: 'mdc-calendar-filter-container',
  templateUrl: 'calendar-filter-container.component.html',
  styleUrls: ['calendar-filter-container.component.css']
})


export class CalendarFilterContainerComponent implements OnInit{

  isActive = false;

  constructor(private dateService: DateService,
              private initializeService: InitializeService,
              private filterState: FilterState) { }

  ngOnInit() {

  }

  openModal() {
    this.isActive = true;
    this.filterState.openAll();
  }

  closeModal() {
    this.submitValues();
  }

  submitValues() {
    this.dateService.filterEventsByDate();
    this.isActive = false;
  }

  resetValues() {
    this.initializeService.reset();
  }
}
