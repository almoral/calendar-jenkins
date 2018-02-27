import {Component, Input, OnInit} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mdc-calendar-filter-by-type',
  templateUrl: 'calendar-filter-by-type.component.html',
  styleUrls: ['calendar-filter-by-type.component.css']
})
export class CalendarFilterByTypeComponent implements OnInit {



  options$: Observable<Array<Object>>;
  currentSelectedOptions$: Observable<Array<Object>>;

  @Input() toggleContainer = true;


  constructor( private dataStoreService: DataStoreService) {}

  ngOnInit() {

    this.options$ = this.dataStoreService.types$;
    this.currentSelectedOptions$ = this.dataStoreService.typesFilter$;

  }

  onOptionsSelected(options:Array<string>) {
    this.dataStoreService.setTypesFilter(options);
  }

}
