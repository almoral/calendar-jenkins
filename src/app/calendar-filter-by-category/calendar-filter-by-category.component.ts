import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, Input, OnInit } from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'mdc-calendar-filter-by-category',
  templateUrl: 'calendar-filter-by-category.component.html',
  styleUrls: ['calendar-filter-by-category.component.css']
})
export class CalendarFilterByTypeComponent implements OnInit {

  categories$: Observable<string[]>;
  typeForm: FormGroup;


  @Input() categoriesData: string[];

  constructor( private dataStoreService: DataStoreService, private fb: FormBuilder) { }

  ngOnInit() {
    this.categories$ = this.dataStoreService.categories$;

    this.typeForm = this.fb.group({
      categories: []
    });
  }


}