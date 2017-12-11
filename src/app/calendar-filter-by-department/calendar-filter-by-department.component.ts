import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DataStoreService} from '../shared/services/data-store.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'mdc-calendar-filter-by-department',
  templateUrl: './calendar-filter-by-department.component.html',
  styleUrls: ['./calendar-filter-by-department.component.css']
})
export class CalendarFilterByDepartmentComponent implements OnInit {

  departmentForm: FormGroup;
  private departments$: Observable<string[]>;

  constructor( private dataStoreService: DataStoreService, private fb: FormBuilder) { }

  ngOnInit() {
    this.departments$ = this.dataStoreService.departments$;

    this.departmentForm = this.fb.group({
      departments: []
    });
  }

}
