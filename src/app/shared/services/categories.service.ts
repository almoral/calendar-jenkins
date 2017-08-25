import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { ConfigurationService} from "./configuration.service";
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class CategoriesService {

  public arrCategories: Array<any> = [];

  constructor(
    private configurationService: ConfigurationService,
    private http: Http
  ) { }

  getCategories(): Observable<Array<Object>>{
    return this.http.get(this.configurationService.urlCategories)
      .map((data: any) => {


          JSON.parse(data.json().results.assets[0].metadata["TeamSite/Metadata/listValuesAndLabels"]).map(
            (item: any) => {
              let category: any = {"value": "", "label": ""};
                category.label = item.label;
                category.value = item.value;
                this.arrCategories.push(category);
            });
          // console.log('CATEGORIES: ', this.arrCategories);

        return this.arrCategories;
      })
      .catch(error => {
        console.error('ERROR: ', error);
        return error;
      })
  }

}
