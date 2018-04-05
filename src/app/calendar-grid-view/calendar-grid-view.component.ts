import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { DateService} from '../shared/services/date.service';
import { DataStoreService } from '../shared/services/data-store.service';
import { Options } from 'fullcalendar';
import {MdcEvent} from '../shared/models/mdc-event';
import {NgxSmartModalService} from 'ngx-smart-modal';
import * as moment from 'moment';
import {CalendarComponent} from 'ng-fullcalendar';
import {Subject} from 'rxjs/Subject';
import {skip, takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'mdc-calendar-grid-view',
  templateUrl: './calendar-grid-view.component.html',
  styleUrls: ['./calendar-grid-view.component.css']
})
export class CalendarGridViewComponent implements OnInit {

  selectedEvent: MdcEvent;
  calendarOptions: Options;

  @ViewChild(CalendarComponent) monthView: CalendarComponent;

  constructor(private dateService: DateService,
              private dataStoreService: DataStoreService,
              public ngxSmartModalService: NgxSmartModalService,
              private router: Router) {}

  ngOnInit() {

    const year = this.dateService.getSelectedYear();
    const month = this.dateService.getSelectedMonth();
    const formattedDate = this.dateService.getFormattedDate();
    const stop$: Subject<boolean> = new Subject<boolean>();

    this.dateService.filterByMonth(year, month);
    this.dataStoreService.events$
      .pipe(
        // The events observable is really a behavior subject so it has an initial value of [].
        skip(1),
        // This allows the app to unsubscribe cleanly when the view is destroyed.
        takeUntil(stop$)
      )
      .subscribe( events => {
      this.initializeGridView(events, formattedDate);
      stop$.next(true);
      });
  }


  initializeGridView (data: MdcEvent[], date: string) {
    this.calendarOptions = {
      editable: false,
      eventLimit: true,
      selectable: true,
      unselectAuto: false,
      defaultDate: date,
      prev: 'fa-chevron-left',
      customButtons: {
        listView: {
          text: 'Day'
        },
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

  // Updates the date in the datastore to what was selected in the month view.
  updateDateAndGetEvents (month: string, year: string, day: string) {
    this.dateService.setMonth(month);
    this.dateService.setYear(year);
    this.dateService.setDay(day);
    this.dateService.filterEventsByDate();
  }

  // Updates the data for the grid view based on user navigation.
  updateMonthData (month: string, year: string, day: string) {
    this.monthView.fullCalendar('removeEvents');
    const stop$: Subject<boolean> = new Subject<boolean>();

    this.updateDateAndGetEvents(month, year, day);

    this.dataStoreService.events$
      .pipe(
        // The first value in the observable is the current (old) value.
        skip(1),
        // This allows us to call complete on the observable once the new values have returned.
        takeUntil(stop$)
      )
      .subscribe(data => {
          if (data.length > 0) {
            this.monthView.fullCalendar('renderEvents', data);
            stop$.next(true);
          }
        },
        (error) => console.log('error: ', error),
        () => console.log('subscription completed')
      );
  }

  // Updates the data and navigates to the day view when the user clicks on the 'Today' button.
  showEventsForDate (month: string, year: string, day: string) {
    this.updateDateAndGetEvents(month, year, day);
    this.router.navigate(['/'], {skipLocationChange: true});
  }

  displayFirstOfMonth () {
    const month = this.dateService.getSelectedMonth();
    const year = this.dateService.getSelectedYear();

    this.showEventsForDate(month, year, '1');
  }

  dayClick(event: any) {
    const month = moment(event.detail.date).format('MMMM');
    const year = moment(event.detail.date).format('YYYY');
    const day = moment(event.detail.date).format('D');

    this.monthView.fullCalendar('select', event.detail.date);

    this.showEventsForDate(month, year, day);

  }


  initialized(event: any) {
    const formattedDate = this.dateService.getFormattedDate();
    this.monthView.fullCalendar('select', formattedDate);
  }

  // Event listener that handles clicks in fullCalendar.
  clickButton(event: any) {
    const selectedDate = this.dateService.getFormattedDate();
    let month = '';
    let year = '';
    let day = '';

    if (event.detail.buttonType === 'today') {
      month = moment().format('MMMM');
      year = moment().format('YYYY');
      day = moment().format('D');
      this.showEventsForDate(month, year, day);
    }

    if (event.detail.buttonType === 'next') {
      month = moment(selectedDate).add(1, 'M').format('MMMM');
      year = moment(selectedDate).format('YYYY');
      this.updateMonthData(month, year, day);
    }

    if (event.detail.buttonType === 'prev') {
      month = moment(selectedDate).subtract(1, 'M').format('MMMM');
      year = moment(selectedDate).format('YYYY');
      this.updateMonthData(month, year, day);
    }

    if (event.detail.buttonType === 'listView') {
      this.displayFirstOfMonth();
    }

    if (event.detail.buttonType === 'gridView') {
      this.router.navigate(['/grid'], {skipLocationChange: true});
    }

  }

  // Event listener that displays the details for a selected event.
  eventClick(event: any) {
    this.selectedEvent = event.detail.event;
    this.ngxSmartModalService.getModal('gridViewEvent').open();
  }

}
