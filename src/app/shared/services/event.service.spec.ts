import { TestBed, inject } from '@angular/core/testing';
import { EventService } from './event.service';
import {TestEvents} from "../models/test-events";
import {Map} from "rxjs/util/Map";
import {MdcEventsByDate, MdcEvent} from "../models/mdc-event";

describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventService]
    });
  });

  it('should be created', inject([EventService], (service: EventService) => {
    expect(service).toBeTruthy();
  }));


  it('when grouping events by date from an empty array I should get back also an empty array', inject([EventService], (service: EventService) => {
    expect(service.eventsByDate([])).toEqual([]);
  }));


  it('when grouping events by date from a null I should get an empty array', inject([EventService], (service: EventService) => {
    expect(service.eventsByDate(null)).toEqual([]);
  }));


  it('when grouping events by date from an undefined I should get an empty array', inject([EventService], (service: EventService) => {
    expect(service.eventsByDate(undefined)).toEqual([]);
  }));

  it('when grouping events by date all happening in the same date I should get one item in the array', inject([EventService], (service: EventService) => {
    let eventsByDate = service.eventsByDate(TestEvents.testEventsSameDay_7_23_2017);
    expect(eventsByDate.length).toEqual(1);
    expect(eventsByDate[0].date).toEqual(new Date(2017, 6, 23));
    expect(eventsByDate[0].events.length).toEqual(3);
    expect(eventsByDate[0].events[0]).toEqual(jasmine.any(MdcEvent));

  }));

  it('when grouping events by date, the result should be order by date ascending', inject([EventService], (service: EventService) => {
    let eventsByDate = service.eventsByDate(TestEvents.testEventsDifferentDates);
    expect(eventsByDate.length).toEqual(3);
    expect(eventsByDate[0].date).toEqual(new Date(2017, 6, 19));
    expect(eventsByDate[1].date).toEqual(new Date(2017, 6, 20));
    expect(eventsByDate[2].date).toEqual(new Date(2017, 6, 22));
    expect(eventsByDate[0].events.length).toEqual(1);
    expect(eventsByDate[1].events.length).toEqual(1);
    expect(eventsByDate[2].events.length).toEqual(1);
    expect(eventsByDate[0].events[0]).toEqual(jasmine.any(MdcEvent));
    expect(eventsByDate[1].events[0]).toEqual(jasmine.any(MdcEvent));
    expect(eventsByDate[2].events[0]).toEqual(jasmine.any(MdcEvent));

  }));

});
