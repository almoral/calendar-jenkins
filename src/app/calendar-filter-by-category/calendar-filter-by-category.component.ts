import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mdc-calendar-filter-by-category',
  templateUrl: 'calendar-filter-by-category.component.html',
  styleUrls: ['calendar-filter-by-category.component.css']
})
export class CalendarFilterByCategoryComponent implements OnInit {




  private options$: Observable<Array<Object>>;
  private currentSelectedOptions$: Observable<Array<Object>>;

  @Input() toggleContainer = true;


  constructor( private dataStoreService: DataStoreService) {}

  ngOnInit() {

    this.options$ = this.dataStoreService.categories$;
    this.currentSelectedOptions$ = this.dataStoreService.categoriesFilter$;

  }

  onOptionsSelected(options:Array<string>) {
    this.dataStoreService.setCategoriesFilter(options);
  }


}
