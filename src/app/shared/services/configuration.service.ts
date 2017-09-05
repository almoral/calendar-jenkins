import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {

  // urlMayor: string = '/api/Mayor';
  urlMayor = '/api/Mayor';
  urlProof = '/api/ProofOne';
  urlCategories = 'https://s0144821.miamidade.gov:7000/registration/api/topics';
  urlEvents = 'https://private-2b2f8b-calendar31.apiary-mock.com/api/calendars/id/events?from=&to=';
  // urlCategories: string ='/categories';
  // urlMayor: string = 'http://s0144821.miamidade.gov:7009/msgraph/api/calendars/Mayor';
  constructor() {
  }

}
