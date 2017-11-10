import {TestBed, inject} from "@angular/core/testing";
import {DataStoreService} from "./data-store.service";
import {TestEvents} from "../models/test-events";
import {EventService} from "./event.service";
import {EventDataService} from "./event-data.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ConfigurationService} from "./configuration.service";
import {MdcEvent, MdcEventsByDate} from "../models/mdc-event";

describe('DataStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataStoreService, EventService, EventDataService, ConfigurationService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([DataStoreService], (service: DataStoreService) => {
    expect(service).toBeTruthy();
  }));

  it('when calling initializeEvents the new collection of events are emitted', inject([DataStoreService], (service: DataStoreService) => {

    service.initializeEvents(TestEvents.testEventsTwo)
    let events$ = service.events$
    events$.subscribe(events => {
        expect(events.length).toBe(2);
        expect(events[0]).toEqual(jasmine.any(MdcEvent));
        expect(events[1]).toEqual(jasmine.any(MdcEvent));
      }
    )
  }));

  it('when calling initializeEvents the collection of events grouped by date are emitted', inject([DataStoreService], (service: DataStoreService) => {

    service.initializeEvents(TestEvents.testEventsTwo)
    let eventsByDate$ = service.eventsByDate$
    eventsByDate$.subscribe(events => {
        expect(events.length).toBe(2);
        expect(events[0]).toEqual(jasmine.any(MdcEventsByDate));
        expect(events[1]).toEqual(jasmine.any(MdcEventsByDate));
      }
    )
  }));

});
