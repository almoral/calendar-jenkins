import { TestBed, inject } from '@angular/core/testing';

import { DataStoreService } from './data-store.service';
import {TestEvents} from "../models/test-events";
import {EventService} from "./event.service";
import {EventDataService} from "./event-data.service";
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ConfigurationService} from "./configuration.service";

describe('DataStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataStoreService, EventService, EventDataService, ConfigurationService],
      imports:[HttpClientTestingModule]
    });
  });

  it('should be created', inject([DataStoreService], (service: DataStoreService) => {
    expect(service).toBeTruthy();
  }));

  it('when calling initializeEvents the new events are emitted', inject([DataStoreService], (service: DataStoreService) => {
    let events$ = service.events$
    service.initializeEvents(TestEvents.testEventsOne)

    events$.subscribe(events => expect(events.length).toBe(3))
  }));

});
