import {Component, Input, OnInit} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'mdc-calendar-filter-by-title',
  templateUrl: 'calendar-filter-by-title.component.html',
  styleUrls: ['calendar-filter-by-title.component.css']
})
export class CalendarFilterByTitleComponent implements OnInit {

  form: FormGroup;

  @Input() toggleContainer = true;
  titleFilter$: Observable<string>;

  constructor(private fb: FormBuilder,
              private dataStoreService: DataStoreService) {
  }

  ngOnInit() {

    this.form = this.fb.group({
      title: ['']
    });

    this.initOnChange();
    this.dataStoreService.titleFilter$.subscribe( value => {
      if(this.form.get('title').value !== value)
        this.form.get('title').setValue(value)});
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
