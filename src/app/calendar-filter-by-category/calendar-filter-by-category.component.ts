import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup } from '@angular/forms';
import {FilterService} from '../shared/services/filter.service';
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

  @Input() categories$: Observable<string[]>;

  @ViewChild(CheckboxGroupComponent) checkboxes: CheckboxGroupComponent;

  @Input() categoriesData: string[];

  constructor( private dataStoreService: DataStoreService,
               private fb: FormBuilder,
               private filterService: FilterService,
               private initializeService: InitializeService) {}

  ngOnInit() {

    this.typeForm = this.fb.group({
      categories: []
    });

    this.initializeService.resetCategories$.subscribe(value => this.checked = value);

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
