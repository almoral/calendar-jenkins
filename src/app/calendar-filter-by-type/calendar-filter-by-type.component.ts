import { Component, OnInit } from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'mdc-calendar-filter-by-type',
  templateUrl: './calendar-filter-by-type.component.html',
  styleUrls: ['./calendar-filter-by-type.component.css']
})
export class CalendarFilterByTypeComponent implements OnInit {

  categories$: Observable<object[]>;

  constructor( private dataStoreService: DataStoreService) { }

  ngOnInit() {

    this.categories$ = this.dataStoreService.categories$;

    this.categories$.subscribe(category => {
      // console.log('category: ', category);
    });

  }

}
