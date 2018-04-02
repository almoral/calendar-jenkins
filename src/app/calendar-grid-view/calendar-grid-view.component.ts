import {Component, OnInit, ViewChild} from '@angular/core';
import { DateService} from '../shared/services/date.service';
import { DataStoreService } from '../shared/services/data-store.service';
import { Options } from 'fullcalendar';
import {MdcEvent} from '../shared/models/mdc-event';
import {NgxSmartModalService} from 'ngx-smart-modal';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import moment = require('moment');
import {CalendarComponent} from 'ng-fullcalendar';
import {Subject} from 'rxjs/Subject';
import {skip, takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';



@Component({
  selector: 'mdc-calendar-grid-view',
  templateUrl: './calendar-grid-view.component.html',
  styleUrls: ['./calendar-grid-view.component.css']
})
export class CalendarGridViewComponent implements OnInit {

  selectedEvent: MdcEvent;
  calendarOptions: Options;
  dataStoreEvents = new BehaviorSubject<MdcEvent[]>([]);

  @ViewChild(CalendarComponent) monthView: CalendarComponent;

  constructor(private dateService: DateService,
              private dataStoreService: DataStoreService,
              public ngxSmartModalService: NgxSmartModalService,
              private router: Router) {}

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
      header: {
        left: '',
        center: 'today, prev, title, next',
        right: ''
      },
      events: data
    };

  }

  // Updates the date in the datastore to what was selected in the month view.
  updateDateAndGetEvents (month: string, year: string, day: string) {
    this.dateService.setMonth(month);
    this.dateService.setYear(year);
    this.dateService.setDay(day);
    this.dateService.filterEventsByDate();
  }

  // Updates the data for the grid view based on user navigation.
  changeMonth (month: string, year: string, day: string) {
    this.monthView.fullCalendar('removeEvents');
    const trigger$: Subject<boolean> = new Subject<boolean>();

    this.updateDateAndGetEvents(month, year, day);

    this.dataStoreService.events$
      .pipe(

        // The first value in the observable is the current (old) value.
        skip(1),

        // This allows us to call complete on the observable once the new values have returned.
        takeUntil(trigger$)
      )
      .subscribe(data => {
          if (data.length > 0) {
            this.monthView.fullCalendar('renderEvents', data);
            trigger$.next(true);
          }
        },
        (error) => console.log('error: ', error),
        () => console.log('subscription completed')
      );
  }

  // Updates the data and navigates to the day view when the user clicks on the 'Today' button.
  showEventsForToday (month: string, year: string, day: string) {
    this.updateDateAndGetEvents(month, year, day);
    this.router.navigate(['/'], {skipLocationChange: true});
  }

  // Event listener that handles clicks in fullCalendar.
  clickButton(event: any) {
    const selectedDate = this.dateService.getFormmattedDate();
    let month = '';
    let year = '';
    let day = '';

    if (event.detail.buttonType === 'today') {
      month = moment().format('MMMM');
      year = moment().format('YYYY');
      day = moment().format('D');
      this.showEventsForToday(month, year, day);
    }

    if (event.detail.buttonType === 'next') {
      month = moment(selectedDate).add(1, 'M').format('MMMM');
      year = moment(selectedDate).format('YYYY');
      this.changeMonth(month, year, day);
    }

    if (event.detail.buttonType === 'prev') {
      month = moment(selectedDate).subtract(1, 'M').format('MMMM');
      year = moment(selectedDate).format('YYYY');
      this.changeMonth(month, year, day);
    }
  }

  // Event listener that displays the details for a selected event.
  eventClick(event: any) {
    this.selectedEvent = event.detail.event;
    this.ngxSmartModalService.getModal('gridViewEvent').open();
  }

}
