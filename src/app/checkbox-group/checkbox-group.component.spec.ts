/* tslint:disable:no-unused-variable */

import {CheckboxGroupComponent} from './checkbox-group.component';
import {ComponentFixture, TestBed, getTestBed, async,} from '@angular/core/testing';
import {CalendarDateFilterComponent} from '../calendar-date-filter/calendar-date-filter.component';
import {EventService} from '../shared/services/event.service';
import {DateService} from '../shared/services/date.service';
import {EventDataService} from '../shared/services/event-data.service';
import {Http} from '@angular/http';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DataStoreService} from '../shared/services/data-store.service';
import {FormsModule} from '@angular/forms';
import {ConfigurationService} from '../shared/services/configuration.service';


describe('Component: CheckboxGroup', () => {

  let component: CheckboxGroupComponent;
  let fixture: ComponentFixture<CheckboxGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        Http,
        DateService,
        DataStoreService,
        EventService,
        EventDataService,
        ConfigurationService
      ],
      imports: [ HttpClientTestingModule, FormsModule ],
      declarations: [ CheckboxGroupComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it('should create an instance', () => {

        expect(component).toBeTruthy();
    });
});
