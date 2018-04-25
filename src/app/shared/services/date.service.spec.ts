import { TestBed, inject } from '@angular/core/testing';
import { DataStoreService } from './data-store.service';
import { DateService } from './date.service';
import {EventService} from './event.service';
import {EventDataService} from './event-data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ConfigurationService} from './configuration.service';
import {FilterOptionsDataService} from './categories-data.service';
import {CalendarDataService} from './calendar-data.service';

describe('DateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DateService,
        DataStoreService,
        EventService,
        EventDataService,
        HttpClientTestingModule,
        ConfigurationService,
        FilterOptionsDataService,
        CalendarDataService
      ]
      ,
      imports: [HttpClientTestingModule]
    });
  });

  it('should return an array with the length equal to the number passed in', inject([DateService], (service: DateService) => {
      let numberOfDays = service.generateDaysInMonth(30);
      expect(numberOfDays.length).toBe(30);
    }));




});
