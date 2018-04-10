import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import { DateService} from '../shared/services/date.service';
import { DataStoreService } from '../shared/services/data-store.service';
import { Options } from 'fullcalendar';
import {MdcEvent} from '../shared/models/mdc-event';
import {NgxSmartModalService} from 'ngx-smart-modal';
import * as moment from 'moment';
import {CalendarComponent} from 'ng-fullcalendar';
import {Subject} from 'rxjs/Subject';
import {takeUntil} from 'rxjs/operators';
import {Router} from '@angular/router';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'mdc-calendar-grid-view',
  templateUrl: './calendar-grid-view.component.html',
  styleUrls: ['./calendar-grid-view.component.css']
})
export class CalendarGridViewComponent implements OnInit, OnDestroy {

  selectedEvent: MdcEvent;
  calendarOptions: Options;
  private ngUnsubscribe: Subject<boolean> = new Subject();

  @ViewChild(CalendarComponent) monthView: CalendarComponent;

  constructor(private dateService: DateService,
              private dataStoreService: DataStoreService,
              public ngxSmartModalService: NgxSmartModalService,
              private router: Router) {}

  ngOnInit() {

    const year = this.dateService.getSelectedYear();
    const month = this.dateService.getSelectedMonth();
    const formattedDate = this.dateService.getFormattedDate();

    this.dateService.filterByMonth(year, month);
    this.initializeGridView([], formattedDate);

  }

  viewRender() {
    this.dataStoreService.events$
      .pipe(
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe( events => {
        this.monthView.fullCalendar('removeEvents');
        this.monthView.fullCalendar('renderEvents', events);
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
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
    this.updateDateAndGetEvents(month, year, day);
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
