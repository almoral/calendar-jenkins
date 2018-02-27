import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ConfigurationService} from './configuration.service';
import 'rxjs/Rx';
import * as _ from 'lodash';
import {HttpClient} from '@angular/common/http';
import {Option} from "../models/option";
import {Category} from "../models/category";

@Injectable()
export class CategoriesDataService {

  constructor(
    private configurationService: ConfigurationService,
    private httpClient: HttpClient
  ) { }

  getCategories(): Observable<Option[]> {

    return this.httpClient.get(this.configurationService.calendarUrls.categoriesUrl)
      .map((response: any) => {

        return this.jsonToCategories(response);
      })
      .catch(error => {
        console.error('getCategories: error while getting list of categories: ', error);
        return Observable.of([]);
      });
  }


  /**
   * maps the raw array of json categories into an array
   * of options. If any of the elements in the
   * array can not be mapped, it is ignored.
   * @param response - Response object containing a body equal to json array representing raw categories
   * @returns {Array<Option>} Converted response into an array
   * of Option Objects.
   */
  private jsonToCategories = (response: any) => {
    if (_.isEmpty(response)) {
      return null;
    }
    const raw: Array<any> = response.data.topics;
    const model: Array<Option> = raw.reduce(function (accumulator, item) {
      const option = Category.fromJSON(item);

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
