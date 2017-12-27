import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {FilterService} from '../shared/services/filter.service';

@Component({
  selector: 'mdc-calendar-filter-by-title',
  templateUrl: 'calendar-filter-by-title.component.html',
  styleUrls: ['calendar-filter-by-title.component.css']
})
export class CalendarFilterByTitleComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private dataStoreService: DataStoreService,
              private filterService: FilterService) {
  }

  ngOnInit() {

    this.form = this.fb.group({
      title: ['']
    });

    this.initOnChange();

    this.filterService.setTitle(environment.titleFilter);

    this.filterService.title$.subscribe( value => this.form.get('title').setValue(value));

  }



  /**
   * initOnChange initializes the reactive form
   * to set the title when it changes.
   */
  initOnChange() {
    this.form.valueChanges
      .filter(() => this.form.valid)
      .subscribe(validValue => {
          this.dataStoreService.setTitleFilter(validValue.title);
        }
      );
  }


}
