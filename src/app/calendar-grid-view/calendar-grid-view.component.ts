import { Component, OnInit } from '@angular/core';
import { DateService} from '../shared/services/date.service';
import { DataStoreService } from '../shared/services/data-store.service';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import * as moment from 'moment';

@Component({
  selector: 'mdc-calendar-grid-view',
  templateUrl: './calendar-grid-view.component.html',
  styleUrls: ['./calendar-grid-view.component.css']
})
export class CalendarGridViewComponent implements OnInit {

  private events = null;
  private year = null;
  private month = null;

  calendarOptions: Options;


  constructor(private dateService: DateService,
              private dataStoreService: DataStoreService) {}

  ngOnInit() {

    this.dateService.year$.subscribe(year => this.year = year);
    this.dateService.month$.subscribe( month => this.month = month);
    this.dateService.filterByMonth(this.year, this.month);

    this.dataStoreService.events$.subscribe( data => {

      // if (data.length > 0) {
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
      // }
    });

  }

  loadEvents() {
    this.dataStoreService.events$.subscribe(data => {
      this.events = data;
    });
  }

}
