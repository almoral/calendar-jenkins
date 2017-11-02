import { TestBed, inject } from '@angular/core/testing';
import { Http, ResponseOptions, Response, ResponseType, HttpModule} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { CalendarDataService } from '../shared/services/calendar-data.service';
import { ConnectionBackend} from '@angular/http';
import { ConfigurationService} from '../shared/services/configuration.service';
import {Configuration} from "jasmine-spec-reporter/built/configuration";

describe('CalendarDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CalendarDataService,
        ConnectionBackend,
        ConfigurationService,
        Http
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('should be created', inject([CalendarDataService], (service: CalendarDataService) => {
    expect(service).toBeTruthy();
  }));
});
