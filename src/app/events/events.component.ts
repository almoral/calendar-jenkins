import {Component, Input, OnInit} from '@angular/core';
import { CalendarDataService } from '../shared/services/calendar-data.service';
import { MDCEvent } from '../shared/models/MDCEvent';
import {environment} from '../../environments/environment';
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
import * as _ from 'lodash';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public events: Array<MDCEvent> = [];
  public filteredArray: Array<MDCEvent> = [];
  datePickerDate: DateModel;
  datePickerOptions: DatePickerOptions;

  @Input() selectedDepartment: string;

  constructor( private calendarDataService: CalendarDataService ) {
    this.datePickerOptions = new DatePickerOptions();
  }

  ngOnInit() {

    this.calendarDataService.getEvents().subscribe((events: Array<MDCEvent>) => {
        this.events = events;
        this.filteredArray = events;
      },
      error => {
        console.error('ERROR: ', error.toString());
      }
    );

    if (!_.isNil(environment.selectedDepartment)){
      this.selectedDepartment = environment.selectedDepartment;
    }

  }
  private applyFilter(filter: string){
    this.filteredArray = this.events.filter(item => {
      if (item.eventDate.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1){
        return true;
      }
      return false;
    });
  }

}
