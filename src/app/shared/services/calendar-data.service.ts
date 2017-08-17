import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import {Observable} from "rxjs";
import 'rxjs/Rx';
import * as _ from "lodash"
import {Http, Response} from "@angular/http";

@Injectable()
export class CalendarDataService {

  public events: Array<any> = [];

  constructor(private http: Http, private configurationService: ConfigurationService) { }

  getEvents(): Observable<Object>{
    return this.http.get(this.configurationService.urlMayor)
      .map((response: any) => {
        console.log('************ RESPONSE: ', response);
        return response;
      })
      .catch(error => {
        console.error('ERROR: ', error);
        return error;
      })
  };



}
