import { Component, OnInit } from '@angular/core';
import {DateService} from '../shared/services/date.service';
import {IMyDpOptions} from 'mydatepicker';
import {FormControl} from '@angular/forms';
import * as moment from 'moment';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'mdc-calendar-navigation',
  templateUrl: './calendar-navigation.component.html',
  styleUrls: ['./calendar-navigation.component.css']
})
export class CalendarNavigationComponent implements OnInit {

  pickerOptions: IMyDpOptions;
  datePicker: FormControl;

  constructor(private dateService: DateService) { }

  ngOnInit() {

    this.datePicker = new FormControl();

    this.datePicker.valueChanges
      .pipe(
        filter(data => data)
      )
      .subscribe( selectedDate => {

        this.dateService.setYear(moment(selectedDate.formatted, 'MM/DD/YYYY').format('YYYY'));
        this.dateService.setMonth(moment(selectedDate.formatted, 'MM/DD/YYYY').format('MMMM'));
        this.dateService.setDay(moment(selectedDate.formatted, 'MM/DD/YYYY').format('DD'));

        this.dateService.filterEventsByDate();
    });

    this.pickerOptions = {
      width: '250px',
      height: '40px'
    };



  }

  filterEventsByNextDate() {
    this.dateService.filterEventsByNextDate();
  }

  filterEventsByPreviousDate() {
    this.dateService.filterEventsByPreviousDate();
  }

  filterEventsByCurrentDate() {
    this.dateService.filterEventsByCurrentDate();
  }

}
