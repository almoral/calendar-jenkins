import { Component, OnInit } from '@angular/core';
import { DateService} from '../shared/services/date.service';
import { DataStoreService } from '../shared/services/data-store.service';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import * as moment from 'moment';
import { forkJoin } from 'rxjs/observable/forkJoin';
import {zip} from 'rxjs/observable/zip';

@Component({
  selector: 'mdc-calendar-grid-view',
  templateUrl: './calendar-grid-view.component.html',
  styleUrls: ['./calendar-grid-view.component.css']
})
export class CalendarGridViewComponent implements OnInit {

  private events = null;
  calendarOptions: Options;


  constructor(private dateService: DateService,
              private dataStoreService: DataStoreService) {}

  ngOnInit() {
    zip(
    this.dateService.year$,
    this.dateService.month$
  ).subscribe( ([year, month]) => {
      this.dateService.filterByMonth(year, month);
    }
    );

    this.dataStoreService.events$.subscribe( data => {

      if (data.length > 0) {
        console.log('events$ data: ', data);

        this.calendarOptions = {
          editable: false,
          eventLimit: true,
          header: {
            left: 'prev,next today',
            center: 'title',
            right: ''
          },
          events: data
        };

        // this.loadEvents();
      }
    });

  }

  loadEvents() {
    this.dataStoreService.events$.subscribe(data => {
      this.events = data;
    });
  }

}
