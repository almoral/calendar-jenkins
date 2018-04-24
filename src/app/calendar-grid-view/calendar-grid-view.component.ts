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
    this.dataStoreService.selectedDate$.first().subscribe(
      date => {
        //moment(date, 'YYYY-MMMM-DD').format('YYYY-MM-DD');
        this.initializeGridView([], moment(date, 'YYYY-MMMM-DD').format('YYYY-MM-DD'));
      });

    //this.initializeGridView([], formattedDate);

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


  dayClick(event: any) {
    this.dataStoreService.setSelectedDate(event.detail.date.toDate());
    this.router.navigate(['../list'], {skipLocationChange: true});
  }


  initialized(event: any) {
    this.dataStoreService.selectedDate$.subscribe(selectedDate => {
      this.monthView.fullCalendar('select', selectedDate)});
  }

  // Event listener that handles clicks in fullCalendar.
  clickButton(event: any) {

    if (event.detail.buttonType === 'next') {
      this.dataStoreService.setSelectedDateToNextMonth();
    }

    if (event.detail.buttonType === 'prev') {
      this.dataStoreService.setSelectedDateToPreviousMonth();
    }

    if (event.detail.buttonType === 'today') {
      this.dataStoreService.setSelectedDate(new Date());
      this.router.navigate(['../list'], {skipLocationChange: true});
    }

    if (event.detail.buttonType === 'listView') {
      this.router.navigate(['../list'], {skipLocationChange: true});
    }

    if (event.detail.buttonType === 'gridView') {
    }

  }

  // Event listener that displays the details for a selected event.
  eventClick(event: any) {
    this.selectedEvent = event.detail.event;
    this.ngxSmartModalService.getModal('gridViewEvent').open();
  }

}
