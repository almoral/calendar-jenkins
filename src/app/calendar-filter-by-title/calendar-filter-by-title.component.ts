import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DataStoreService} from "../shared/services/data-store.service";

@Component({
  selector: 'calendar-filter-by-title',
  templateUrl: 'calendar-filter-by-title.component.html',
  styleUrls: ['calendar-filter-by-title.component.css']
})
export class CalendarFilterByTitleComponent implements OnInit {

  title$: Observable<string>;
  title:string = '';

  constructor(private dataStoreService:DataStoreService ) {}

  ngOnInit() {

    this.title$ = Observable.of("Hey");
  }

  onEnter(value: string) {this.dataStoreService.setTitle(value) }


}
