import {InitializeService} from '../shared/services/initialize.service';
import {Component, OnInit} from '@angular/core';
import {DateService} from '../shared/services/date.service';
import {ConfigurationService} from "../shared/services/configuration.service";

@Component({
  selector: 'mdc-calendar-filter-container',
  templateUrl: 'calendar-filter-container.component.html',
  styleUrls: ['calendar-filter-container.component.css']
})

export class CalendarFilterContainerComponent implements OnInit{

  isActive = false;
  showCalendarsFilter = false;

  constructor(private dateService: DateService,
              private initializeService: InitializeService,
              private configurationService: ConfigurationService) { }

  ngOnInit() {
    if (this.configurationService.showCalendarsFilter) {
      this.showCalendarsFilter = true;
    }
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
