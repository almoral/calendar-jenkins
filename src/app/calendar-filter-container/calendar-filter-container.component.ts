import {Component, OnInit} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import {DatePickerService} from '../shared/services/date-picker.service';
import {DateService} from '../shared/services/date.service';

@Component({
  selector: 'mdc-calendar-filter-container',
  templateUrl: './calendar-filter-container.component.html',
  styleUrls: ['./calendar-filter-container.component.css']
})
export class CalendarFilterContainerComponent implements OnInit {

  isActive = false;
  titleText: string = null;
  categories: boolean[];


  constructor(private dataStoreService: DataStoreService,
              private datePickerService: DatePickerService,
              private dateService: DateService) { }

  openModal() {
    this.isActive = true;
    this.titleText = null;
  }
  closeModal() {
    this.isActive = false;
    this.dataStoreService.getEvents(this.datePickerService)
  }

  ngOnInit() {
  }

  resetValues() {
    this.dataStoreService.setTitleFilter('');
    this.titleText = '';
  }

}
