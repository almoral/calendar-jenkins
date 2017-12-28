import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'lodash';
import {FilterService} from '../shared/services/filter.service';


@Component({
  selector: 'mdc-calendar-filter-by-category',
  templateUrl: 'calendar-filter-by-category.component.html',
  styleUrls: ['calendar-filter-by-category.component.css']
})
export class CalendarFilterByTypeComponent implements OnInit {

  categories$: Observable<string[]>;
  typeForm: FormGroup;

  @Input() categoriesData: string[];
  @Input() resetCategories: boolean;

  constructor( private dataStoreService: DataStoreService,
               private fb: FormBuilder,
               private filterService: FilterService) {}

  ngOnInit() {
    // This populates the checkboxes
    this.categories$ = this.dataStoreService.categories$;

    this.typeForm = this.fb.group({
      categories: []
    });

    this.filterService.resetCategories$.subscribe(value => this.resetCategories = value);

  }

  filterEvents(selection) {
    this.filterService.filterCategories(selection);
  }


}
