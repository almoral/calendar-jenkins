import { TestBed, inject, async, getTestBed } from '@angular/core/testing';
import {BaseRequestOptions, Http, ResponseOptions, Response, ResponseType} from "@angular/http";
import {MockBackend, MockConnection} from '@angular/http/testing';
import { EventsDataService } from '../shared/services/events-data.service';
import { CalendarDataService} from '../shared/services/calendar-data.service';
import { ConfigurationService} from '../shared/services/configuration.service';

class MockError extends Response implements Error {
  name: any;
  message: any;
}

describe('EventsDataService', () => {
  let mockBackend: MockBackend;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EventsDataService,
        CalendarDataService,
        ConfigurationService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backendInstance, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }]
    });
    mockBackend = getTestBed().get(MockBackend);
  });

  it('should be created', inject([EventsDataService], (service: EventsDataService) => {
    expect(service).toBeTruthy();
  }));
});
