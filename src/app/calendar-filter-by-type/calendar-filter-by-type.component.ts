import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import { Observable } from 'rxjs/Observable';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Category } from '../shared/models/Category';

@Component({
  selector: 'mdc-calendar-filter-by-type',
  templateUrl: './calendar-filter-by-type.component.html',
  styleUrls: ['./calendar-filter-by-type.component.css']
})
export class CalendarFilterByTypeComponent implements OnInit {

  categories$: Observable<string[]>;
  filterByTypeForm: FormGroup;
  allCategories: FormArray = new FormArray([]);

  @Input() categoriesData: string[];

  constructor( private dataStoreService: DataStoreService,
               private fb: FormBuilder) { }

  ngOnInit() {
    this.categories$ = this.dataStoreService.categoriesFilter$;
    this.categories$.map((category, i) => {
      let fg = new FormGroup({});
      fg.addControl(category[i]['value'], new FormControl(false))
      this.allCategories.push(fg);
    });

    this.filterByTypeForm = this.fb.group({
      categories: this.allCategories
  });
  }

}
