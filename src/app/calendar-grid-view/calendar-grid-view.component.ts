import {AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import { DateService} from '../shared/services/date.service';
import { DataStoreService } from '../shared/services/data-store.service';
import { Options } from 'fullcalendar';
import {zip} from 'rxjs/observable/zip';
import {map, skip} from 'rxjs/operators';
import {MdcEvent} from '../shared/models/mdc-event';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'mdc-calendar-grid-view',
  templateUrl: './calendar-grid-view.component.html',
  styleUrls: ['./calendar-grid-view.component.css']
})
export class CalendarGridViewComponent implements OnInit {

  events = null;
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

    // const end$ = new Subject();
    this.dataStoreService.events$
      .pipe(
        skip(1)
      )
      .subscribe( (data: MdcEvent[]) => {

        // Clearing the url for the grid view.
        // data.map( event => event.url = null);

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
    $event.preventDefault();
    console.log('click fired! ', $event);
    // click.stopPropagation();
    return false;
  }
}
