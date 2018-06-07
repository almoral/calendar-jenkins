import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'mdc-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class MDCCalendarComponent implements OnInit {

  isInCompactMode = environment.displayFullView;

  constructor() { }

  ngOnInit() {
  }

}
