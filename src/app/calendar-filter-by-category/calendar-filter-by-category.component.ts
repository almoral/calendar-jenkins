import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as _ from 'lodash';


@Component({
  selector: 'mdc-calendar-filter-by-category',
  templateUrl: 'calendar-filter-by-category.component.html',
  styleUrls: ['calendar-filter-by-category.component.css']
})
export class CalendarFilterByTypeComponent implements OnInit {

  categories$: Observable<string[]>;
  typeForm: FormGroup;
  selectedCategories: Array<string> = [];


  @Input() categoriesData: string[];

  constructor( private dataStoreService: DataStoreService, private fb: FormBuilder) { }

  ngOnInit() {
    this.categories$ = this.dataStoreService.categories$;

    this.typeForm = this.fb.group({
      categories: []
    });
  }

  filterEvents(event) {
    if (this.selectedCategories.indexOf(event) > -1) {
      this.selectedCategories = _.filter(this.selectedCategories, (item) => {
        return item !== event;
      });
    } else {
      this.selectedCategories.push(event);
    }

    this.dataStoreService.setCategoriesFilter(this.selectedCategories);
  }


}
