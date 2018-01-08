import {InitializeService} from '../shared/services/initialize.service';
import {Observable} from 'rxjs/Observable';
import {Component, OnInit} from '@angular/core';
import {DateService} from '../shared/services/date.service';

@Component({
  selector: 'mdc-calendar-filter-container',
  templateUrl: 'calendar-filter-container.component.html',
  styleUrls: ['calendar-filter-container.component.css']
})


export class CalendarFilterContainerComponent implements OnInit{

  isActive = false;
  resetCategories: boolean;

  constructor(private dateService: DateService,
              private initializeService: InitializeService) { }

  ngOnInit() {
    this.initializeService.categoriesFilter$.subscribe(value => this.resetCategories = value);

  }

  openModal() {
    this.isActive = true;
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
