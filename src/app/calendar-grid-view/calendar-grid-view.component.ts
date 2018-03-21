import {Component, OnInit} from '@angular/core';
import { DateService} from '../shared/services/date.service';
import { DataStoreService } from '../shared/services/data-store.service';
import { Options } from 'fullcalendar';
import {MdcEvent} from '../shared/models/mdc-event';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'mdc-calendar-grid-view',
  templateUrl: './calendar-grid-view.component.html',
  styleUrls: ['./calendar-grid-view.component.css']
})
export class CalendarGridViewComponent implements OnInit {

  events = null;
  calendarOptions: Options;
  eventSelected = new BehaviorSubject<boolean>(false);
  event = new BehaviorSubject(null);

  constructor(private dateService: DateService,
              private dataStoreService: DataStoreService) {}

  ngOnInit() {

    this.events = this.dataStoreService.events$;

    this.events
      .subscribe( (data: MdcEvent[]) => {
        console.log('data for events: ', data);
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

  eventClick($event: any) {
    console.log('testing listener: ', $event);
    this.event.next($event.detail.event);
    this.eventSelected.next(true);
  }
}
