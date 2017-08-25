import { Injectable } from '@angular/core';

@Injectable()
export class ConfigurationService {

  // urlMayor: string = '/api/Mayor';
  urlMayor: string = 'http://s0144821.miamidade.gov:7009/msgraph/api/calendars/Mayor';
  urlProof: string = '/api/ProofOne';
  // urlCategories: string = '/categories';
  urlCategories: string ='http://s0144035/ajaxreq/lscs/v1/document/$TeamSite/Metadata/listValuesAndLabels?q=(TeamSite/Templating/DCR/Type:=data-types/taxonomy) AND (TeamSite/Metadata/mduid:=tax1450881961115869)&project=//s0144035/BETA/main/miamidade&max=100&format=json&context=//s0144035/BETA/main/miamidade';
  // urlMayor: string = 'http://s0144821.miamidade.gov:7009/msgraph/api/calendars/Mayor';
  constructor() {
  }

}
