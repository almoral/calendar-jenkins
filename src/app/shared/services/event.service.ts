import {Injectable} from '@angular/core';
import {MdcEvent, MdcEventsByDate} from '../models/mdc-event';
import * as _ from 'lodash';
import {environment} from '../../../environments/environment';

@Injectable()
export class EventService {

  constructor() {
  }

  public excludeDepartmentOnly = environment.excludeDepartmentOnly;

  /**
   * eventsByDate takes an list of MdcEvent events and group
   * them and order them by date.
   * @param events - array of MdcEvent to be grouped and ordered.
   * @returns {MdcEventsByDate[]} - group and ordered events.
   */
  eventsByDate(events: MdcEvent[]): MdcEventsByDate[] {
    return _.chain(events)
      .groupBy(
        event =>
          new Date(event.startDate.getFullYear(),
            event.startDate.getMonth(),
            event.startDate.getDate()
          ))
      .map((value, key) => new MdcEventsByDate(new Date(key),
        _.orderBy(value, ['startDate'], ['asc'])))
      .orderBy(['date'], ['asc'])
      .value();

  }


  /**
   * filterEvents filter events which meet the filterEventsByTitle
   * requirements and the filterEventsByCategory requirements.
   * @param events - array of MdcEvent. Each one meets the title contraints
   * and the categories contraint
   * @param title - title to use filterEventByTitle contraint.
   * @param categories - categories in filterEventsByCategory constraint.
   * @param types - types in filterEventsByType constraint.
   * @param calendars - calendars in filterEventsByCalendar constraint.
   */
  filterEvents(events: MdcEvent[], title: string, categories: string[], types: string[], calendars: string[]): MdcEvent[] {
    return this.filterEventsByCalendar(
      this.filterEventsByCategory(
        this.filterEventsByType(
        this.filterEventsByTitle(
          this.filterDepartmentsOnlyEvents(events),
          title),
        types),
        categories),
      calendars);
  }


  /**
   * filterIventsInRange filter, will return events whose start date is within
   * the from-to range.
   * @param events - array of MdcEvent to be filtered.
   * @param from - start date of the range.
   * @param to - end date of the range.
   * @returns {MdcEvent[]} - filtered events that fall within range.
   */

  filterEventsInRange(events: MdcEvent[], from: Date, to: Date){

    // No range or partial range provided, return all events.
    if(_.isEmpty(to) || _.isEmpty(from))
      return events;

    // filter events within range
    return _.filter(events, (event: MdcEvent) => {
      return (Date.parse(from.toString()) <= Date.parse(event.startDate.toString()) &&
      Date.parse(to.toString()) >= Date.parse(event.startDate.toString()))
    });

  }


  /**
   *
   * @param events
   * @param title
   */
  filterEventsByTitle(events: MdcEvent[], title: string): MdcEvent[] {


    // no title. Return all events.
    if (_.isEmpty(title)) {
      return events;
    }

    // filter any event whose mdcEvent.title contains title.
    return _.filter(events, (event: MdcEvent) => {
      return new RegExp(title, 'i').test(event.title);
    });
  }

  /**
   * filterEventsByCategory intersects categories with MdcEvent.categories
   * If intersection is not empty the event passes the filter. As long as an
   * event contain at least one category in categories, it will pass the filter.
   * If the filter is an empty array of categories return all events.
   * @param events - array of MdcEvent to be filtered.
   * @param categories - array of strings representing the categories to be intersected.
   */
  filterEventsByCategory(events: MdcEvent[], categories: string[]): MdcEvent[] {

    // no categories. Return all events.
    if (_.isEmpty(categories))
      return events;

    // filter by intersecting categories.
    return _.filter(events, (event: MdcEvent) => {
      return !(_.isEmpty(_.intersection(categories, event.categories)));
    });
  }

  /**
   * filterEventsByType intersects types with MdcEvent.types
   * If intersection is not empty the event passes the filter. As long as an
   * event contain at least one type in types, it will pass the filter.
   * If the filter is an empty array of types return all events.
   * @param events - array of MdcEvent to be filtered.
   * @param types - array of strings representing the types to be intersected.
   */
  filterEventsByType(events: MdcEvent[], types: string[]): MdcEvent[] {

    // no categories. Return all events.
    if (_.isEmpty(types))
      return events;

    // filter by intersecting categories.
    return _.filter(events, (event: MdcEvent) => {
      return !(_.isEmpty(_.intersection(types, event.eventTypes)));
    });
  }


  /**
   * filterEventsByCalendar returns all events in events whose calendarId is contained
   * in calendars.
   * If calendars is empty return all events.
   * @param events - array of MdcEvent to be filtered.
   * @param calendars - - array of strings representing the calendarIds to be intersected.
   * @returns {MdcEvent[]} - Collection of events which belong to on of the calendars.
   */
  filterEventsByCalendar(events: MdcEvent[], calendars: string[]): MdcEvent[] {

    // no calendars. Return all events.
    if (_.isEmpty(calendars))
      return events;

    // filter by intersecting calendars.
    return _.filter(events, (event: MdcEvent) => {
      return !(_.isEmpty(_.intersection(calendars, [event.calendarId])));
    });
  }


  // This keeps department only events from displaying.
  filterDepartmentsOnlyEvents(events: MdcEvent[]) {
    return _.filter(events, (event: MdcEvent) => {
      if (this.excludeDepartmentOnly) {
        return _.filter(event.eventTypes, isDepartmentOnlyValue => {
          if (!isDepartmentOnlyValue) {
            return event;
          }
        });
      } else {
        return event;
      }
      });
  }

}

