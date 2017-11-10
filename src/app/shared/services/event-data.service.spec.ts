import { TestBed, inject } from '@angular/core/testing';

import { EventDataService } from './event-data.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ConfigurationService} from "./configuration.service";
import {MdcEvent} from "../models/mdc-event";

describe('EventDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventDataService, ConfigurationService],
      imports:[HttpClientTestingModule]

    });
  });


  it('should be created', inject([EventDataService], (service: EventDataService) => {
    expect(service).toBeTruthy();
  }));


  it('when making a call to get events I would like it to be mapped to an array of MdcEvents', inject([HttpTestingController, EventDataService],
    (httpMock: HttpTestingController, service: EventDataService) => {

      let jsonEvent1 = {
        id: 1,
        title: 'my title',
        type: 'public',
        startDate: '2017-07-20T15:00:00Z',
        endDate: '2017-07-21T15:00:00Z',
        contactName: 'my contactName',
        contactPhone: '3055555555',
        contactEmail: 'contact@email.com',
        adaName: 'my adaName',
        adaPhone: '3055551234',
        adaEmail: 'ada@email.com',
        isRecurringEvent: false,
        isAllDayEvent: false,
        shortDescription: 'This is a short description.',
        longDescription: 'This is a long description.',
        isClosedToMedia: false,
        isClosedToPublic: false,
        isFree: false,
        fee: 5,
        rsvp: 'joe bler',
        categories: ['animals', 'public-safety'],
        url: {'description': 'URL for event', 'url': 'http://www.google.com'},
        address: null
      }

      let jsonEvent2 = {
        id: 2,
        title: 'my title2',
        type: 'public',
        startDate: '2017-07-20T15:00:00Z',
        endDate: '2017-07-21T15:00:00Z',
        contactName: 'my contactName2',
        contactPhone: '3055555555',
        contactEmail: 'contact2@email.com',
        adaName: 'my adaName2',
        adaPhone: '3055551234',
        adaEmail: 'ada2@email.com',
        isRecurringEvent: false,
        isAllDayEvent: true,
        shortDescription: 'This is a short description 2.',
        longDescription: 'This is a long description 2.',
        isClosedToMedia: false,
        isClosedToPublic: false,
        isFree: false,
        fee: 5,
        rsvp: 'joe bler',
        categories: ['animals', 'public-safety'],
        url: {'description': 'URL for event 2', 'url': 'http://www.google.com'},
        address: null
      }


      // mock the fromJSONArray so we control its output
      let mockJsonEvents = [MdcEvent.fromJSON(jsonEvent1), MdcEvent.fromJSON(jsonEvent2)];
      MdcEvent.fromJSONArray = (json) => mockJsonEvents;

      service.getEventsOnCalendar("ASD")
        .subscribe(data => {
          expect(data.length).toBe(2);
          expect(data[0] instanceof MdcEvent).toBe(true);
          expect(data[1] instanceof MdcEvent).toBe(true);
        }, error => fail());

      const req = httpMock.expectOne('/api/calendar/ASD/events');
      expect(req.request.method).toEqual('GET');
      req.flush(mockJsonEvents);
      httpMock.verify();

    }));

  it('when making a call to get events, if no calendar is found I would like to get an empty collection ', inject([HttpTestingController, EventDataService],
    (httpMock: HttpTestingController, service: EventDataService) => {

      service.getEventsOnCalendar("DOESNOTEXIST")
        .subscribe(data => {
          expect(data).toEqual([]);
        }, error => fail());

      const req = httpMock.expectOne('/api/calendar/DOESNOTEXIST/events');
      expect(req.request.method).toEqual('GET');
      req.flush({ foo: 'bar' }, { status: 404, statusText: 'Not Found' });

      httpMock.verify();

    }));

  it('when making a call to get events, if http 500 Server error occurs, resend an error ', inject([HttpTestingController, EventDataService],
    (httpMock: HttpTestingController, service: EventDataService) => {

      service.getEventsOnCalendar("ASD")
        .subscribe(data => {
          fail();
        }, error => expect(error).toBe('Error ocurred: 500'));

      const req = httpMock.expectOne('/api/calendar/ASD/events');
      expect(req.request.method).toEqual('GET');
      req.flush({ foo: 'bar' }, { status: 500, statusText: 'Server Error' });

      httpMock.verify();

    }));

  it('when making a call to get events, if network error occurs, resend an error ', inject([HttpTestingController, EventDataService],
    (httpMock: HttpTestingController, service: EventDataService) => {

      service.getEventsOnCalendar("ASD")
        .subscribe(data => {
          fail();
        }, error => expect(error).toBe('client-side or network error occurred.'));

      const req = httpMock.expectOne('/api/calendar/ASD/events');
      expect(req.request.method).toEqual('GET');
      req.error(new ErrorEvent('bad error'));

      httpMock.verify();

    }));

});
