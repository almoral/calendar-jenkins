import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {

  // urlMayor = '/api/calendars/Mayor/events';
  urlDevCalendar = '/api/calendars/CalProof1/events';
  urlCategories = 'https://s0144821.miamidade.gov:7000/registration/api/topics';
  urlEvents = 'https://private-2b2f8b-calendar31.apiary-mock.com/api/calendars/id/events?from=&to=';

  constructor() {
  }

}
