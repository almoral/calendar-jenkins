import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {DataStoreService} from "../shared/services/data-store.service";


@Component({
  selector: 'mdc-calendar-filter-by-calendar',
  templateUrl: './calendar-filter-by-calendar.component.html',
  styleUrls: ['./calendar-filter-by-calendar.component.css']
})
export class CalendarFilterByCalendarComponent implements OnInit {



  private options$: Observable<Array<Object>>;
  private currentSelectedOptions$: Observable<Array<Object>>;

  @Input() toggleContainer = true;


  constructor( private dataStoreService: DataStoreService) {}

  ngOnInit() {

    this.options$ = this.dataStoreService.calendars$;
    this.currentSelectedOptions$ = this.dataStoreService.calendarsFilter$;

  }

  onOptionsSelected(options:Array<string>) {
    this.dataStoreService.setCalendarsFilter(options);
  }



}
