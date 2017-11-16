import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import {Injectable} from "@angular/core";

// tslint:disable:no-unused-variable
import { Observable }  from 'rxjs/Observable';
import { of }          from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import {TestEvents} from "../models/test-events";
// tslint:enable:no-unused-variable


@Injectable()
export class InMemoryDataService implements InMemoryDbService {

  createDb(reqInfo?: RequestInfo) {

    const events = {events:TestEvents.testEvents};
    const departments = [];
    const types = [];

    // default returnType
    // let returnType  = 'object';
    let returnType  = 'observable';
    // let returnType  = 'promise';

    const db = {events}
    //const db = {events, departments, types};

    switch (returnType) {
      case ('observable'):
        return of(db).delay(10);
      case ('promise'):
        return new Promise(resolve => {
          setTimeout(() => resolve(db), 10);
        });
      default:
        return db;
    }
  }
}
