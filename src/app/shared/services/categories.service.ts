import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import { ConfigurationService} from "./configuration.service";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class CategoriesService {
  public categories: Array<any> = [];
  constructor(
    private configurationService: ConfigurationService,
    private http: Http
  ) { }

  getCategories(): Observable<Object>{
    return this.http.get(this.configurationService.urlCategories)
      .map((category: any) => {
        this.categories.push(category);
        return this.categories;
      })
      .catch(error => {
        console.error('ERROR: ', error);
        return error;
      })
  }

}
