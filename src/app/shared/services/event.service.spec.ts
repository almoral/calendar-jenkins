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


  it('when I choose an empty title to filter events, all events should show', inject([EventService], (service: EventService) => {
    let events = service.filterEventsByTitle(TestEvents.testEvents, '');
    expect(events.length).toBe(9);

  }));



  it('when I choose a title to filter events, only events that contain the string on the title should show', inject([EventService], (service: EventService) => {
    let events = service.filterEventsByTitle(TestEvents.testEvents, 'big');
    expect(events.length).toBe(2);

  }));



  it('when filtering events by category, if events are null, return []', inject([EventService], (service: EventService) => {
    let events = service.filterEventsByCategory(null, ['some category']);
    expect(events).toEqual([]);

  }));

  it('when filtering events by category, if events are [], return []', inject([EventService], (service: EventService) => {
    let events = service.filterEventsByCategory([], ['some category']);
    expect(events).toEqual([]);

  }));

  it('when I choose categories to be [], skip filtering and return all events', inject([EventService], (service: EventService) => {
    let events = service.filterEventsByCategory(TestEvents.testEventsCategories, []);
    expect(events).toEqual(TestEvents.testEventsCategories);

  }));


  it('when I choose several categories to filter events, if they are not contained on any of the events, return []', inject([EventService], (service: EventService) => {
    let events = service.filterEventsByCategory(TestEvents.testEventsCategories, ['no category']);
    expect(events).toEqual([]);

  }));

  it('when I choose one category to filter events, only events that contain that category should show', inject([EventService], (service: EventService) => {
    let events = service.filterEventsByCategory(TestEvents.testEventsCategories, ['animals']);
    expect(events.length).toBe(2);

  }));

  it('when I choose several categories to filter events, only events that contain one of those should show', inject([EventService], (service: EventService) => {
    let events = service.filterEventsByCategory(TestEvents.testEventsCategories, ['animals', 'public-safety']);
    expect(events.length).toBe(3);
  }));


  it('when filtering events, only those who pass title and categories contraint should show', inject([EventService], (service: EventService) => {
    let events = service.filterEvents(TestEvents.testEventsCategories, 'title2', ['animals', 'public-safety']);
    expect(events.length).toBe(1);
  }));

  it('when filtering events, if event only match title do not show it', inject([EventService], (service: EventService) => {
    let events = service.filterEvents(TestEvents.testEventsOne, 'title3', ['no category']);
    expect(TestEvents.testEventsOne[0].title).toBe('my title3 is big');
    expect(TestEvents.testEventsOne[0].categories).toEqual(['public-safety']);
    expect(events.length).toBe(0);
  }));


  it('when filtering events, if event only match category do not show it', inject([EventService], (service: EventService) => {
    let events = service.filterEvents(TestEvents.testEventsOne, 'small', ['public-safety']);
    expect(TestEvents.testEventsOne[0].title).toBe('my title3 is big');
    expect(TestEvents.testEventsOne[0].categories).toEqual(['public-safety']);
    expect(events.length).toBe(0);
  }));

  it('when filtering events, if event matches title and at least one category then show it', inject([EventService], (service: EventService) => {
    let events = service.filterEvents(TestEvents.testEventsOne, 'big', ['public-safety']);
    expect(TestEvents.testEventsOne[0].title).toBe('my title3 is big');
    expect(TestEvents.testEventsOne[0].categories).toEqual(['public-safety']);
    expect(events.length).toBe(1);
  }));



});
