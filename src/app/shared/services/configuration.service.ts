import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable()
export class ConfigurationService {

  dateFilterType = environment.dateFilterType;
  calendars = environment.calendars;
  showCalendarsFilter = environment.showCalendarsFilter;

  calendarUrls = {
    eventsOnCalendarUrl: environment.calendarUrls.eventsOnCalendarUrl,
    categoriesUrl: environment.calendarUrls.categoriesUrl,
    typesUrl: environment.calendarUrls.typesUrl
  }

  constructor() {
  }

}
