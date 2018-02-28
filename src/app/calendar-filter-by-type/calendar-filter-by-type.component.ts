import {Component, Input, OnInit} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mdc-calendar-filter-by-type',
  templateUrl: 'calendar-filter-by-type.component.html',
  styleUrls: ['calendar-filter-by-type.component.css']
})
export class CalendarFilterByTypeComponent implements OnInit {

  options$: Observable<Array<Object>>;
  currentSelectedOptions$: Observable<Array<Object>>;

  @Input() toggleContainer = true;

  constructor( private dataStoreService: DataStoreService,
               private route: ActivatedRoute) {}

  ngOnInit() {

    this.options$ = this.dataStoreService.types$;
    this.currentSelectedOptions$ = this.dataStoreService.typesFilter$;

    this.route.queryParams
      .filter( params => params.eventTypesFilter)
      .subscribe( params => {
        this.toggleContainer = false;
        this.onOptionsSelected(params.eventTypesFilter.split(','));
      });


  }

  onOptionsSelected(options: Array<string>) {
    this.dataStoreService.setTypesFilter(options);
  }

}
