import {Component, OnInit, ViewChild} from '@angular/core';
import { DateService} from '../shared/services/date.service';
import { DataStoreService } from '../shared/services/data-store.service';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import {zip} from 'rxjs/observable/zip';

@Component({
  selector: 'mdc-calendar-grid-view',
  templateUrl: './calendar-grid-view.component.html',
  styleUrls: ['./calendar-grid-view.component.css']
})
export class CalendarGridViewComponent implements OnInit {

  events = null;
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

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

    this.dataStoreService.events$
      // .pipe(
      //   switchMap(data) => {
      // })
      .subscribe( data => {

      // if (data.length > 0) {
      //   console.log('events$ data: ', data);

        this.calendarOptions = {
          editable: true,
          eventLimit: false,
          header: {
            left: 'prev,next today',
            center: 'title',
            right: ''
          },
          events: data
        };

        // this.loadEvents();
      // }
    },
        error => console.log('error: ', error),
        () => console.log('subscription complete!'));

  }

  loadEvents() {
    this.dataStoreService.events$.subscribe(data => {
      console.log('events$ data: ', data);
      this.events = data;
    });
  }

}
