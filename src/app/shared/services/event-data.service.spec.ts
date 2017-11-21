import { TestBed, inject } from '@angular/core/testing';

import { EventDataService } from './event-data.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ConfigurationService} from "./configuration.service";
import {MdcEvent} from "../models/mdc-event";
import {TestEvents} from "../models/test-events";
import * as _ from "lodash";


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



  it('when making a call to get events, to and from query params should be passed in the url ', inject([HttpTestingController, EventDataService],
    (httpMock: HttpTestingController, service: EventDataService) => {
      service.getEventsOnCalendar("ASD", new Date("11/21/2017"), new Date("11/25/2017"))
        .subscribe(data => {
          expect(data.length).toBe(2);
          expect(data[0] instanceof MdcEvent).toBe(true);
          expect(data[1] instanceof MdcEvent).toBe(true);
        }, error => fail());

      const req = httpMock
        .expectOne(req => req.method === 'GET' && req.url === '/api/calendar/ASD/events');
      expect(req.request.params.get('to')).toEqual('11/21/2017');
      expect(req.request.params.get('from')).toEqual('11/25/2017');
      req.flush({events:TestEvents.testJsonEventsTwo});
      httpMock.verify();

    }));


  it('when making a call to get events, if we dont pass the "from" param, it will be made equal to the "to" param ', inject([HttpTestingController, EventDataService],
    (httpMock: HttpTestingController, service: EventDataService) => {
      service.getEventsOnCalendar("ASD", new Date("11/21/2017"))
        .subscribe(data => {
          expect(data.length).toBe(2);
          expect(data[0] instanceof MdcEvent).toBe(true);
          expect(data[1] instanceof MdcEvent).toBe(true);
        }, error => fail());

      const req = httpMock
        .expectOne(req => req.method === 'GET' && req.url === '/api/calendar/ASD/events');
      expect(req.request.params.get('to')).toEqual('11/21/2017');
      expect(req.request.params.get('from')).toEqual('11/21/2017');
      req.flush({events:TestEvents.testJsonEventsTwo});
      httpMock.verify();

    }));

  it('when making a call to get events I would like it to be mapped to an array of MdcEvents', inject([HttpTestingController, EventDataService],
    (httpMock: HttpTestingController, service: EventDataService) => {

      service.getEventsOnCalendar("ASD", new Date(), new Date())
        .subscribe(data => {
          expect(data.length).toBe(2);
          expect(data[0] instanceof MdcEvent).toBe(true);
          expect(data[1] instanceof MdcEvent).toBe(true);
        }, error => fail());

      const req = httpMock
        .expectOne(req => req.method === 'GET' && req.url === '/api/calendar/ASD/events');
      expect(req.request.method).toEqual('GET');
      req.flush({events:TestEvents.testJsonEventsTwo});
      httpMock.verify();

    }));

  it('when making a call to get events, if no calendar is found I would like to get an empty collection ', inject([HttpTestingController, EventDataService],
    (httpMock: HttpTestingController, service: EventDataService) => {

      service.getEventsOnCalendar("DOESNOTEXIST", new Date(), new Date())
        .subscribe(data => {
          expect(data).toEqual([]);
        }, error => fail());

      const req = httpMock
        .expectOne(req => req.method === 'GET' && req.url === '/api/calendar/DOESNOTEXIST/events');
      expect(req.request.method).toEqual('GET');
      req.flush({ foo: 'bar' }, { status: 404, statusText: 'Not Found' });

      httpMock.verify();

    }));

  it('when making a call to get events, if http 500 Server error occurs, resend an error ', inject([HttpTestingController, EventDataService],
    (httpMock: HttpTestingController, service: EventDataService) => {

      service.getEventsOnCalendar("ASD", new Date(), new Date())
        .subscribe(data => {
          fail();
        }, error => expect(error).toBe('Error ocurred: 500'));

      const req = httpMock
        .expectOne(req => req.method === 'GET' && req.url === '/api/calendar/ASD/events');
      expect(req.request.method).toEqual('GET');
      req.flush({ foo: 'bar' }, { status: 500, statusText: 'Server Error' });

      httpMock.verify();

    }));

  it('when making a call to get events, if network error occurs, resend an error ', inject([HttpTestingController, EventDataService],
    (httpMock: HttpTestingController, service: EventDataService) => {

      service.getEventsOnCalendar("ASD", new Date(), new Date())
        .subscribe(data => {
          fail();
        }, error => expect(error).toBe('client-side or network error occurred.'));


      const req = httpMock
        .expectOne(req => req.method === 'GET' && req.url === '/api/calendar/ASD/events');
      expect(req.request.method).toEqual('GET');
      req.error(new ErrorEvent('bad error'));

      httpMock.verify();

    }));

  it('when making a call to get events from several calendars, when passing null an observable with empty array is returned ', inject([HttpTestingController, EventDataService],
    (httpMock: HttpTestingController, service: EventDataService) => {

      service.getEventsOnCalendars(null, new Date(), new Date())
        .subscribe(data => {
          expect(data).toEqual([]);
        }, error => fail());

    }));


  it('when making a call to get events from several calendars, when passing [] an observable with empty array is returned ', inject([HttpTestingController, EventDataService],
    (httpMock: HttpTestingController, service: EventDataService) => {

      service.getEventsOnCalendars([], new Date(), new Date())
        .subscribe(data => {
          expect(data).toEqual([]);
        }, error => fail());

    }));

  it('when making a call to get events from several calendars, I would like to get events from all caledars in one collection', inject([HttpTestingController, EventDataService],
    (httpMock: HttpTestingController, service: EventDataService) => {

      service.getEventsOnCalendars(["ASD", "Mayor"], new Date(), new Date())
        .subscribe(data => {
          expect(data.length).toBe(5);
          expect(data instanceof Array).toBe(true);
          expect(data[0] instanceof MdcEvent).toBe(true);
          expect(data[1] instanceof MdcEvent).toBe(true);
        }, error => fail());


      const req = httpMock
        .expectOne(req => req.method === 'GET' && req.url === '/api/calendar/ASD/events');
      expect(req.request.method).toEqual('GET');
      req.flush({events: TestEvents.testJsonEventsTwo});

      const req2 = httpMock
        .expectOne(req => req.method === 'GET' && req.url === '/api/calendar/Mayor/events');
      expect(req2.request.method).toEqual('GET');
      req2.flush({events:TestEvents.testJsonEventsThree});

      httpMock.verify();

    }));


  it('when making a call to get events from several calendars, ignore calendars which do not exist', inject([HttpTestingController, EventDataService],
    (httpMock: HttpTestingController, service: EventDataService) => {

      service.getEventsOnCalendars(["ASD", "NoCalendar"], new Date(), new Date())
        .subscribe(data => {
          expect(data.length).toBe(2);
          expect(data instanceof Array).toBe(true);
          expect(data[0] instanceof MdcEvent).toBe(true);
          expect(data[1] instanceof MdcEvent).toBe(true);
        }, error => fail());



      const req = httpMock
        .expectOne(req => req.method === 'GET' && req.url === '/api/calendar/ASD/events');
      expect(req.request.method).toEqual('GET');
      req.flush({events: TestEvents.testJsonEventsTwo});

      const req2 = httpMock
        .expectOne(req => req.method === 'GET' && req.url === '/api/calendar/NoCalendar/events');
      expect(req2.request.method).toEqual('GET');
      req2.flush({}, { status: 404, statusText: 'Not Found' });

      httpMock.verify();

    }));



  it('when making a call to get events from several calendars, ignore calendars that throw an error', inject([HttpTestingController, EventDataService],
    (httpMock: HttpTestingController, service: EventDataService) => {

      service.getEventsOnCalendars(["ASD", "NoCalendar"], new Date(), new Date())
        .subscribe(data => {
          expect(data.length).toBe(2);
          expect(data instanceof Array).toBe(true);
          expect(data[0] instanceof MdcEvent).toBe(true);
          expect(data[1] instanceof MdcEvent).toBe(true);
        }, error => fail());

      const req = httpMock
        .expectOne(req => req.method === 'GET' && req.url === '/api/calendar/ASD/events');
      expect(req.request.method).toEqual('GET');
      req.flush({events: TestEvents.testJsonEventsTwo});

      const req2 = httpMock
        .expectOne(req => req.method === 'GET' && req.url === '/api/calendar/NoCalendar/events');
      expect(req2.request.method).toEqual('GET');
      req2.flush({}, { status: 500, statusText: 'Server Error' });

      httpMock.verify();

    }));

});
