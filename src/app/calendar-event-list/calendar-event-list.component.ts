import {Component, OnInit} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import {MdcEventsByDate} from '../shared/models/mdc-event';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {take} from 'rxjs/operators';

@Component({
  selector: 'mdc-calendar-event-list',
  templateUrl: './calendar-event-list.component.html',
  styleUrls: ['./calendar-event-list.component.css']
})
export class CalendarEventListComponent implements OnInit {

  events$: Observable<MdcEventsByDate[]>;
  displayFullView = environment.displayFullView;
  page = 1;

  constructor(private dataStore: DataStoreService) { }

  ngOnInit() {

    if ( !this.displayFullView ) {
      this.events$ = this.dataStore.eventsByDate$
        .pipe(
          take(5)
        );
    } else {
      this.events$ = this.dataStore.eventsByDate$;
    }
  }


}
