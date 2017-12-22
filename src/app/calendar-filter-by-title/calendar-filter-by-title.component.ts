import {Component, Input, OnInit} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from '../../environments/environment';

@Component({
  selector: 'mdc-calendar-filter-by-title',
  templateUrl: 'calendar-filter-by-title.component.html',
  styleUrls: ['calendar-filter-by-title.component.css']
})
export class CalendarFilterByTitleComponent implements OnInit {

  form: FormGroup;

  @Input() titleText = '';

  constructor(private fb: FormBuilder, private dataStoreService: DataStoreService) {
  }

  ngOnInit() {

    this.form = this.fb.group({
      title: ['']
    });

    this.initOnChange();

    this.form.get('title').setValue(environment.titleFilter);

  }


  /**
   * initOnChange initializes the reactive form
   * to set the title when it changes.
   */
  initOnChange() {
    this.form.valueChanges
      .filter(() => this.form.valid)
      .subscribe(validValue =>
        this.dataStoreService.setTitleFilter(validValue.title));
  }


}
