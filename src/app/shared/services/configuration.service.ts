import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {

  // urlMayor: string = '/api/Mayor';
  urlMayor: string = '/api/Mayor';
  urlProof: string = '/api/ProofOne';
  urlCategories: string = 'https://s0144821.miamidade.gov:7000/registration/api/topics';
  // urlCategories: string ='/categories';
  // urlMayor: string = 'http://s0144821.miamidade.gov:7009/msgraph/api/calendars/Mayor';
  constructor() {
  }

}
