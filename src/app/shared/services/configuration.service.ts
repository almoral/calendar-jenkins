import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {

  // urlMayor: string = '/api/Mayor';

  urlMayor: string = 'http://s0144821.miamidade.gov:7009/msgraph/api/calendars/Mayor';
  constructor() {
  }

}
