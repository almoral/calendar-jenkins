import {Injectable} from "@angular/core";
import {MdcEvent, MdcEventsByDate} from "../models/mdc-event";
import * as _ from "lodash";

@Injectable()
export class EventService {

  constructor() {
  }


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
      .map((value, key) => new MdcEventsByDate(new Date(key), value))
      .orderBy(['date'], ['asc'])
      .value();

  }


  filterEventsByTitle(events: MdcEvent[], title: string): MdcEvent[] {

    // filter of null/empty/undefined retuns empty collection.

    // apply title filter
    //_.matchesProperty('events.title', title)
    return _.filter(events, (event: MdcEvent) => {
      let match = new RegExp(title).test(event.title);
      return match;
    });

  }

}

