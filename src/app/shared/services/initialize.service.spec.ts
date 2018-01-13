import { TestBed, inject } from '@angular/core/testing';

import { InitializeService } from './initialize.service';
import {DateService} from './date.service';
import {DataStoreService} from './data-store.service';
import {EventService} from './event.service';
import {EventDataService} from './event-data.service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';
import {CategoriesDataService} from './categories-data.service';
import {CalendarDataService} from './calendar-data.service';

describe('InitializeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InitializeService,
        DateService,
        DataStoreService,
        EventService,
        EventDataService,
        HttpClient,
        HttpHandler,
        ConfigurationService,
        CategoriesDataService,
        CalendarDataService
      ]
    });
  });

  it('should be created', inject([InitializeService], (service: InitializeService) => {
    expect(service).toBeTruthy();
  }));
});
