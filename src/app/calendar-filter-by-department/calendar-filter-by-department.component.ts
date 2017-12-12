import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DataStoreService} from '../shared/services/data-store.service';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';

@Component({
  selector: 'mdc-calendar-filter-by-department',
  templateUrl: './calendar-filter-by-department.component.html',
  styleUrls: ['./calendar-filter-by-department.component.css']
})
export class CalendarFilterByDepartmentComponent implements OnInit {

  departmentForm: FormGroup;
  public departments$: Observable<string[]>;
  selectedDepartments: Array<string> = [];

  constructor( private dataStoreService: DataStoreService, private fb: FormBuilder) { }

  ngOnInit() {
    this.departments$ = this.dataStoreService.calendars$;

    this.departmentForm = this.fb.group({
      departments: []
    });
  }

  filterByDepartments(event) {
    console.log('event emitted value: ', event);
    if (this.selectedDepartments.indexOf(event) > -1) {
      this.selectedDepartments = _.filter(this.selectedDepartments, (item) => {
        return item !== event;
      });
    } else {
      this.selectedDepartments.push(event);
    }

    this.dataStoreService.setCalendarsFilter(this.selectedDepartments);
  }


}
