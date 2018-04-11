import { Component, OnInit } from '@angular/core';
import {DateService} from '../shared/services/date.service';
import {IMyDpOptions} from 'mydatepicker';
import * as moment from 'moment';
import {combineLatest} from 'rxjs/observable/combineLatest';

@Component({
  selector: 'mdc-calendar-navigation',
  templateUrl: './calendar-navigation.component.html',
  styleUrls: ['./calendar-navigation.component.css']
})
export class CalendarNavigationComponent implements OnInit {

  pickerOptions: IMyDpOptions;
  selectedDate = {};

  constructor(private dateService: DateService) { }

  ngOnInit() {

    combineLatest(
        this.dateService.year$,
        this.dateService.month$,
        this.dateService.day$
    )
      .subscribe( date => {

        if (date[2] === '') {
          date[2] = '1';
        }

        this.selectedDate = {
          year: moment(date[0], 'YYYY').format('YYYY'),
          month: moment(date[1], 'MMMM').format('M'),
          day: moment(date[2], 'DD').format('D')
        };
      });

    this.pickerOptions = {
      width: '250px',
      height: '40px'
    };
  }

  onDateChanged(event: any) {

    this.dateService.setYear(moment(event.date.year, 'YYYY').format(DateService.YEAR_FORMAT));
    this.dateService.setMonth(moment(event.date.month, 'M').format(DateService.MONTH_FORMAT));
    this.dateService.setDay(moment(event.date.day, 'D').format(DateService.DAY_FORMAT));
    this.dateService.filterEventsByDate();
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
