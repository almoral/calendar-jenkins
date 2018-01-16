import {async, ComponentFixture, TestBed, getTestBed, inject} from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { CalendarDateFilterComponent } from './calendar-date-filter.component';
import {DateService} from '../shared/services/date.service';
import {DataStoreService} from '../shared/services/data-store.service';
import {EventService} from '../shared/services/event.service';
import { EventDataService } from '../shared/services/event-data.service';
import { HttpClient, HttpHandler} from '@angular/common/http';
import {ConfigurationService} from '../shared/services/configuration.service';
import {FormsModule} from '@angular/forms';

describe('CalendarDateFilterComponent', () => {
  let component: CalendarDateFilterComponent;
  let fixture: ComponentFixture<CalendarDateFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        DateService,
        DataStoreService,
        EventService,
        EventDataService,
        ConfigurationService
      ],
      imports: [ HttpClientTestingModule, FormsModule ],
      declarations: [ CalendarDateFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarDateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });




});
