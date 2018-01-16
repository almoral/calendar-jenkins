import {TestBed, inject} from '@angular/core/testing';
import {DataStoreService} from './data-store.service';
import {TestEvents} from '../models/test-events';
import {EventService} from './event.service';
import {EventDataService} from './event-data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ConfigurationService} from './configuration.service';
import {MdcEvent, MdcEventsByDate} from '../models/mdc-event';
import {CategoriesDataService} from './categories-data.service';
import {CalendarDataService} from './calendar-data.service';

describe('DataStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataStoreService,
        EventService,
        EventDataService,
        ConfigurationService,
        CategoriesDataService,
        CalendarDataService
      ],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([DataStoreService], (service: DataStoreService) => {
    expect(service).toBeTruthy();
  }));

  it('when calling setEvents the new collection of events are emitted', inject([DataStoreService], (service: DataStoreService) => {

    service.setEvents(TestEvents.testEventsTwo);

    const events$ = service.events$;
    events$.subscribe(events => {
        expect(events.length).toBe(2);
        expect(events[0]).toEqual(jasmine.any(MdcEvent));
        expect(events[1]).toEqual(jasmine.any(MdcEvent));
      }
    )
  }));

  it('when calling setEvents the collection of events grouped by date are emitted', inject([DataStoreService], (service: DataStoreService) => {

    service.setEvents(TestEvents.testEventsTwo)
    let eventsByDate$ = service.eventsByDate$
    eventsByDate$.subscribe(events => {
        expect(events.length).toBe(2);
        expect(events[0]).toEqual(jasmine.any(MdcEventsByDate));
        expect(events[1]).toEqual(jasmine.any(MdcEventsByDate));
      }
    )
  }));

});
