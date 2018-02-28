import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import { Observable } from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mdc-calendar-filter-by-category',
  templateUrl: 'calendar-filter-by-category.component.html',
  styleUrls: ['calendar-filter-by-category.component.css']
})
export class CalendarFilterByCategoryComponent implements OnInit {




  options$: Observable<Array<Object>>;
  currentSelectedOptions$: Observable<Array<Object>>;

  @Input() toggleContainer = true;


  constructor( private dataStoreService: DataStoreService,
               private route: ActivatedRoute) {}

  ngOnInit() {

    this.options$ = this.dataStoreService.categories$;
    this.currentSelectedOptions$ = this.dataStoreService.categoriesFilter$;

    this.route.queryParams
      .filter( params => params.categoriesFilter)
      .subscribe( params => {
        this.toggleContainer = false;
        this.onOptionsSelected(params.categoriesFilter.split(','));
      });

  }

  onOptionsSelected(options: Array<string>) {
    this.dataStoreService.setCategoriesFilter(options);
  }


}
