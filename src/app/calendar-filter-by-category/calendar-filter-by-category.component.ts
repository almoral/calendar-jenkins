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

  constructor( private dataStoreService: DataStoreService,
               private fb: FormBuilder,
               private filterService: FilterService) { }

  ngOnInit() {
    // This populates the checkboxes
    this.categories$ = this.dataStoreService.categories$;

    this.typeForm = this.fb.group({
      categories: []
    });

    this.filterService.checked$.subscribe( value => this.typeForm.get('categories').setValue(value));
  }

  filterEvents(selection) {
    this.filterService.filterCategories(selection);
  }


}
