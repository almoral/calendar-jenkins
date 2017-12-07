import {AfterContentInit, Component, Input, OnInit} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import { Observable } from 'rxjs/Observable';
import { FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'mdc-calendar-filter-by-type',
  templateUrl: './calendar-filter-by-type.component.html',
  styleUrls: ['./calendar-filter-by-type.component.css']
})
export class CalendarFilterByTypeComponent implements OnInit {

  categories$: Observable<string[]>;
  allCategories: FormArray = new FormArray([]);
  form: FormGroup;
  @Input() categoriesData: string[];


  constructor( private dataStoreService: DataStoreService,
               private fb: FormBuilder) { }

  createItem(value: string, label: string): FormGroup {
    return this.fb.group({
      value: value,
      label: label
    });
  }

  ngOnInit() {
    this.categories$ = this.dataStoreService.categoriesFilter$;
    // let form: FormGroup = new FormGroup({});

    this.categories$.map((category, i) => {
      this.allCategories.push(this.createItem(category[i]['value'], category[i]['label']));
      console.log('categories mapped: ', category[i]['value']);
    });

    this.form = this.fb.group({
      categories: [this.allCategories]
    });
  }

}
