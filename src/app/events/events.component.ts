import {Component, Input, OnInit, DoCheck, AfterContentChecked, ViewChild, EventEmitter} from '@angular/core';
import { CalendarDataService } from '../shared/services/calendar-data.service';
import { MDCEvent } from '../shared/models/MDCEvent';
import {environment} from '../../environments/environment';
import { DatePickerOptions, DateModel } from 'mdc-date';
import * as _ from 'lodash';
import * as moment from 'moment';
import {DatePickerComponent} from 'mdc-date/lib-dist/ng2-datepicker.component';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, DoCheck, AfterContentChecked {

  @ViewChild(DatePickerComponent)
  private datePicker: DatePickerComponent;

  public events: Array<MDCEvent> = [];
  public filteredArray: Array<MDCEvent> = [];
  datePickerDate: DateModel;
  datePickerOptions: DatePickerOptions;
  private formattedDate: any;

  @Input() selectedDepartment: string;

  constructor( private calendarDataService: CalendarDataService ) {
    this.datePickerOptions = new DatePickerOptions();
  }

  ngOnInit() {
    // Set current date as default value for ng2-datepicker.
    const dateModel: DateModel = new DateModel();
    const momentObj = moment();
    dateModel.momentObj = momentObj;
    dateModel.formatted = momentObj.format('l');
    this.datePickerDate = dateModel;
    this.formattedDate = moment().format('dddd, MMMM Do');
    this.datePicker.open();
    // Get events from service in order to populate event list.
    this.calendarDataService.getEvents().subscribe((events: Array<MDCEvent>) => {
        this.events = events;

        // Using filteredArray so that the view will automatically update when a new date is selected.
        this.filteredArray = events;
      },
      error => {
        console.error('ERROR: ', error.toString());
      }
    );

    if (!_.isNil(environment.selectedDepartment)) {
      this.selectedDepartment = environment.selectedDepartment;
    }

  }

  ngAfterContentChecked(){
    if (!_.isNil(this.datePickerDate.momentObj)) {
      this.applyFilter(this.datePickerDate.momentObj.format('YYYY-MM-DD'));
    }
  }

  ngDoCheck() {
    if (!_.isNil(this.datePickerDate.momentObj)) {
      this.applyFilter(this.datePickerDate.momentObj.format('YYYY-MM-DD').toString());
      this.formattedDate = this.datePickerDate.momentObj.format('dddd, MMMM Do');
    }
  }

  private applyFilter(filter: string) {
    if (filter === '') {
      return true;
    }

    if (!_.isNil(this.events)) {
      this.filteredArray = this.events.filter(item => {
        if (item.eventDate.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
          return true;
        }
        return false;
      });
    }
  }

  private reset() {
    this.filteredArray = this.events;
    this.datePickerDate.year = null;
    this.datePickerDate.month = null;
    this.datePickerDate.momentObj = null;
    this.datePickerDate.formatted = null;

  }

}
