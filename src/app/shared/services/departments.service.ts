import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as _ from 'lodash';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from './configuration.service';
import {Filter} from '../models/Filter';

@Injectable()
export class DepartmentsService {

  constructor( private httpClient: HttpClient,
               private configurationService: ConfigurationService
  ) { }

  getDepartments(): Observable<Array<Object>> {

    return this.httpClient.get(this.configurationService.urlDepartments)
      .map((response: any) => {
        const departments = this.jsonToDepartments(response);
        return departments;
      })
      .catch(error => {
        console.error('ERROR: ', error);
        return error;
      });
  }

  /**
   * maps the raw array of json topics into an array
   * of Filter Objects. If any of the elements in the
   * array can not be mapped, it is ignored.
   * @param response - Response object containing a body equal to json array representing raw topics
   * @returns {Array<Filter>} Converted response into an array
   * of Filter Objects. It will return an empty array if nothing
   * in the response could be converted to an Topic or the response hand an empty body.
   */
  private jsonToDepartments = (response: any) => {
    if (_.isEmpty(response)) {
      console.log('is empty');
      return null;
    }
    let raw: Array<any> = response.data.organizations;
    let model: Array<Filter> = raw.reduce(function (accumulator, item) {
      let department = Filter.fromJSON(item);

      if (department) {
        accumulator.push(department);
      }
      console.log('departments accumulator: ', accumulator);

      return accumulator;
    }, []);

    if (model.length === 0) {
      return null;
    }

    return model;
  }
}
