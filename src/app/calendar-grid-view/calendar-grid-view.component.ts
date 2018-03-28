import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DateService} from '../shared/services/date.service';
import { DataStoreService } from '../shared/services/data-store.service';
import { Options } from 'fullcalendar';
import {MdcEvent} from '../shared/models/mdc-event';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import moment = require('moment');



@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'mdc-calendar-grid-view',
  templateUrl: './calendar-grid-view.component.html',
  styleUrls: ['./calendar-grid-view.component.css']
})
export class CalendarGridViewComponent implements OnInit {

  selectedEvent: MdcEvent;
  calendarOptions: Options;
  dataStoreEvents = new BehaviorSubject<MdcEvent[]>([]);

  constructor(private router: Router,
              private dateService: DateService,
              private dataStoreService: DataStoreService,
              public ngxSmartModalService: NgxSmartModalService) {}

  ngOnInit() {

    const formattedDate = this.dateService.getFormmattedDate();
    const year = this.dateService.getSelectedYear();
    const month = this.dateService.getSelectedMonth();
    const sharedEvents = this.dataStoreService.events$.share();

    sharedEvents.subscribe( data => this.dataStoreEvents.next(data));

    if (this.dataStoreEvents.getValue().length > 0) {
      this.initializeGridView(this.dataStoreEvents.getValue(), formattedDate);
    } else {
        this.dateService.filterByMonth(year, month);
        sharedEvents.subscribe( events => {
          this.initializeGridView(events, formattedDate);
        });
    }
  }

  initializeGridView (data: MdcEvent[], date: string) {

    this.calendarOptions = {
      editable: false,
      eventLimit: true,
      selectable: true,
      defaultDate: date,
      prev: 'fa-chevron-left',
      customButtons: {
        listView: {
          text: 'Day'
        }
        gridView: {
          text: 'Month'
        }       
      },
      header: {
        left: 'today,prev,next',
        center: 'title',
        right: 'listView,gridView'
      },
      events: data
    };

  }

  clickButton(event: any) {
    const selectedDate = this.dateService.getFormmattedDate();

    if (event.detail.buttonType === 'next') {
      const month = moment(selectedDate).add(1, 'M').format('MMMM');
      const year = moment(selectedDate).format('YYYY');

      console.log('month: ', month, 'year: ', year);

      this.dateService.filterByMonth(year, month);
    }

    if (event.detail.buttonType === 'prev') {
      const month = moment(selectedDate).subtract(1, 'M').format('M');
      const year = moment(selectedDate).format('YYYY');

      console.log('month: ', month, 'year: ', year);

      this.dateService.filterByMonth(year, month);
    }

    if(event.detail.buttonType === 'listView') {
      this.router.navigate(['/list']);
    }

    if(event.detail.buttonType === 'gridView') {
      this.router.navigate(['/grid']);
    }

  }

  eventClick(event: any) {
    this.selectedEvent = event.detail.event;
    this.ngxSmartModalService.getModal('gridViewEvent').open();
  }

}
