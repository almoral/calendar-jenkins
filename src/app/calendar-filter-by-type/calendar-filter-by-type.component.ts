import { Component, OnInit } from '@angular/core';
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

  categories$: Observable<Category[]>;
  filterByTypeForm: FormGroup;

  constructor( private dataStoreService: DataStoreService,
               private fb: FormBuilder) { }

  ngOnInit() {
    let allTypes: FormArray = new FormArray([]);
    this.categories$ = this.dataStoreService.categories$;

    this.dataStoreService.categories$.subscribe( (category) => {
        console.log('category in service: ', category);
        let fg = new FormGroup({});
        fg.addControl(category[0].label, new FormControl(false));
        allTypes.push(fg);

    });

    this.filterByTypeForm = this.fb.group({
      'types': allTypes
    });

  }

}
