import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup } from '@angular/forms';
import {InitializeService} from '../shared/services/initialize.service';
import {CheckboxGroupComponent} from '../checkbox-group/checkbox-group.component';
import * as _ from 'lodash';


@Component({
  selector: 'mdc-calendar-filter-by-category',
  templateUrl: 'calendar-filter-by-category.component.html',
  styleUrls: ['calendar-filter-by-category.component.css']
})
export class CalendarFilterByCategoryComponent implements OnInit {

  typeForm: FormGroup;
  checked = false;
  selectedCategories: Array<string> = [];

  categories$: Observable<string[]>;

  @ViewChild(CheckboxGroupComponent) checkboxes: CheckboxGroupComponent;

  @Input() categoriesData: string[];

  constructor( private dataStoreService: DataStoreService,
               private fb: FormBuilder,
               private initializeService: InitializeService) {}

  ngOnInit() {

    this.categories$ = this.dataStoreService.categories$;

    this.typeForm = this.fb.group({
      categories: []
    });

    this.initializeService.categoriesFilter$.subscribe(value => {
      this.checked = value;
      this.selectedCategories.length = 0;
      this.dataStoreService.setCategoriesFilter(this.selectedCategories);
    });

  }

  onChanges() {
    this.checkboxes.isChecked = this.checked;
  }

  filterEvents(selection) {

    if ( _.indexOf(this.selectedCategories, selection) === -1) {

      this.selectedCategories.push(selection);
    } else {
      _.remove(this.selectedCategories, category => category === selection);
    }

    this.dataStoreService.setCategoriesFilter(this.selectedCategories);
  }


}
