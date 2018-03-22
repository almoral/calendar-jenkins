import { Component, OnInit } from '@angular/core';
import { DateService} from '../shared/services/date.service';
import { DataStoreService } from '../shared/services/data-store.service';
import { Options } from 'fullcalendar';
import {MdcEvent} from '../shared/models/mdc-event';
import {NgxSmartModalService} from 'ngx-smart-modal';

@Component({
  selector: 'mdc-calendar-grid-view',
  templateUrl: './calendar-grid-view.component.html',
  styleUrls: ['./calendar-grid-view.component.css']
})
export class CalendarGridViewComponent implements OnInit {

  selectedEvent: MdcEvent;
  calendarOptions: Options;

  constructor(private dateService: DateService,
              private dataStoreService: DataStoreService,
              public ngxSmartModalService: NgxSmartModalService) {}

  ngOnInit() {

    this.dataStoreService.events$.subscribe( data => {

      this.calendarOptions = {
        editable: false,
        eventLimit: true,
        selectable: true,
        header: {
          left: '',
          center: 'today, prev, title, next',
          right: ''
        },
        events: data
      };
    });
  }

  eventClick(event: any) {
    this.selectedEvent = event.detail.event;
    this.ngxSmartModalService.getModal('gridViewEvent').open();
  }

}
