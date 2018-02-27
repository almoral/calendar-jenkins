import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ConfigurationService} from './configuration.service';
import 'rxjs/Rx';
import {Type} from '../models/type';
import * as _ from 'lodash';
import {HttpClient} from '@angular/common/http';
import {Option} from "../models/option";

@Injectable()
export class TypesDataService {

  constructor(
    private configurationService: ConfigurationService,
    private httpClient: HttpClient
  ) { }

  getTypes(): Observable<Option[]> {

    return this.httpClient.get(this.configurationService.calendarUrls.typesUrl)
      .map((response: any) => {

        return this.jsonToTypes(response);
      })
      .catch(error => {
        console.error('getTypes: error while getting list of types: ', error);
        return Observable.of([]);
      });
  }


  /**
   * maps the raw array of json types into an array
   * of options. If any of the elements in the
   * array can not be mapped, it is ignored.
   * @param response - Response object containing a body equal to json array representing raw types
   * @returns {Array<Option>} Converted response into an array
   * of Option Objects.
   */
  private jsonToTypes = (response: any) => {
    if (_.isEmpty(response)) {
      return null;
    }

    const raw: Array<any> = response;

    const model: Array<Option> = raw.reduce(function (accumulator, item) {
      const option = Type.fromJSON(item);

      if (option) {
        accumulator.push(option);
      }
      return accumulator;
    }, []);

    if (model.length === 0) {
      return null;
    }

    return model;
  }

}
