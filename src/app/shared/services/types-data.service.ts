import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ConfigurationService} from './configuration.service';
import 'rxjs/Rx';
import {TypeFilter} from '../models/typeFilter';
import * as _ from 'lodash';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TypesDataService {

  constructor(
    private configurationService: ConfigurationService,
    private httpClient: HttpClient
  ) { }

  getTypes(): Observable<TypeFilter[]> {

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
   * maps the raw array of json topics into an array
   * of Filter Objects. If any of the elements in the
   * array can not be mapped, it is ignored.
   * @param response - Response object containing a body equal to json array representing raw topics
   * @returns {Array<Category>} Converted response into an array
   * of Filter Objects. It will return an empty array if nothing
   * in the response could be converted to an Topic or the response hand an empty body.
   */
  private jsonToTypes = (response: any) => {
    if (_.isEmpty(response)) {
      console.log('is empty');
      return null;
    }
    const raw: Array<any> = response;
    const model: Array<TypeFilter> = raw.reduce(function (accumulator, item) {
      const filterType = TypeFilter.fromJSON(item);

      if (filterType) {
        accumulator.push(filterType);
      }
      return accumulator;
    }, []);

    if (model.length === 0) {
      return null;
    }

    return model;
  }

}
