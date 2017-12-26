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
  selectedCategories: Array<string> = [];


  @Input() categoriesData: string[];

  constructor( private dataStoreService: DataStoreService,
               private fb: FormBuilder,
               private filterService: FilterService) { }

  ngOnInit() {
    // This populates the checkboxes
    this.categories$ = this.dataStoreService.categories$;

    // this.selectedCategories = this.filterService.categories$.slice();

    this.typeForm = this.fb.group({
      categories: []
    });
  }

  filterEvents(selection) {

    this.selectedCategories = this.selectedCategories.filter( category => category !== selection);

    console.log('selected categories: ', this.selectedCategories);

    // Check to see if the checkbox has already been checked.
    if (this.selectedCategories.indexOf(selection) > -1) {
      // If it was checked then return array of unique values.
      this.selectedCategories = _.filter(this.selectedCategories, (item) => {
        return item !== selection;
      });
    } else {

      // If it wasn't checked then add to existing array.
      this.selectedCategories.push(selection);
    }

    this.dataStoreService.setCategoriesFilter(this.selectedCategories);
  }


}
