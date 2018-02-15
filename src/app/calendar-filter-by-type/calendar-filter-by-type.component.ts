import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup } from '@angular/forms';
import {InitializeService} from '../shared/services/initialize.service';
import {CheckboxGroupComponent} from '../checkbox-group/checkbox-group.component';
import * as _ from 'lodash';

@Component({
  selector: 'mdc-calendar-filter-by-type',
  templateUrl: 'calendar-filter-by-type.component.html',
  styleUrls: ['calendar-filter-by-type.component.css']
})
export class CalendarFilterByTypeComponent implements OnInit {

  typeForm: FormGroup;
  checked = false;
  selectedTypes: Array<string> = [];

  types$: Observable<string[]>;

  @ViewChild(CheckboxGroupComponent) checkboxes: CheckboxGroupComponent;

  @Input() toggleContainer = true;

  constructor( private dataStoreService: DataStoreService,
               private fb: FormBuilder,
               private initializeService: InitializeService) {}

  ngOnInit() {

    this.types$ = this.dataStoreService.categories$;

    this.typeForm = this.fb.group({
      types: []
    });

    this.initializeService.categoriesFilter$.subscribe(value => {
      this.checked = value;
      this.selectedTypes.length = 0;
      this.dataStoreService.setCategoriesFilter(this.selectedTypes);
    });

  }

  onChanges() {
    this.checkboxes.isChecked = this.checked;
  }

  filterEvents(selection) {

    if ( _.indexOf(this.selectedTypes, selection) === -1) {

      this.selectedTypes.push(selection);
    } else {
      _.remove(this.selectedTypes, category => category === selection);
    }

    this.dataStoreService.setCategoriesFilter(this.selectedTypes);
  }

}
