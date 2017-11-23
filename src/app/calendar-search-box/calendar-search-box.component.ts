import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DataStoreService} from "../shared/services/data-store.service";

@Component({
  selector: 'mdc-calendar-search-box',
  templateUrl: './calendar-search-box.component.html',
  styleUrls: ['./calendar-search-box.component.css']
})
export class CalendarSearchBoxComponent implements OnInit {

  title$: Observable<string>;
  title:string = '';

  constructor(private dataStoreService:DataStoreService ) {}

  ngOnInit() {

    this.title$ = Observable.of("Hey");
  }

  onEnter(value: string) {this.dataStoreService.setTitle(value) }


}
