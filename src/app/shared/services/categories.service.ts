import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ConfigurationService} from './configuration.service';
import 'rxjs/Rx';
import {Category} from '../models/Category';
import * as _ from 'lodash';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CategoriesService {

  public arrCategories: Array<Category> = [];

  constructor(
    private configurationService: ConfigurationService,
    private httpClient: HttpClient
  ) { }

  getCategories(): Observable<Array<Object>>{

    return this.httpClient.get(this.configurationService.urlCategories)
      .map((response: any) => {

          const categories = this.jsonToCategories(response);
          // JSON.parse(data.json().topics).map(
          //   (item: any) => {
          //       let category: Category = new Category(item.value, item.label);
          //       this.arrCategories.push(category);
          //   });
          // console.log('CATEGORIES: ', this.arrCategories);

        // return this.arrCategories;

        return categories;
      })
      .catch(error => {
        console.error('ERROR: ', error);
        return error;
      });
  }


  /**
   * maps the raw array of json topics into an array
   * of Organziation Objects. If any of the elements in the
   * array can not be mapped, it is ignored.
   * @param response - Response object containing a body equal to json array representing raw topics
   * @returns {Array<Topic>} Converted response into an array
   * of Topic Objects. It will return an empty array if nothing
   * in the response could be converted to an Topic or the response hand an empty body.
   */
  private jsonToCategories = (response: any) => {
    if (_.isEmpty(response)) {
      console.log('is empty');
      return null;
    }
    let raw: Array<any> = response.data.topics;
    let model: Array<Category> = raw.reduce(function (accumulator, item) {
      let category = Category.fromJSON(item);

      if (category) {
        accumulator.push(category);
      }
      return accumulator;
    }, []);

    if (model.length === 0) {
      return null;
    }

    return model;
  };

}
