import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'mdc-calendar-list-view',
  templateUrl: './calendar-list-view.component.html',
  styleUrls: ['./calendar-list-view.component.css']
})
export class CalendarListViewComponent implements OnInit {

  isInCompactMode = environment.displayInCompactMode;

  constructor() { }

  ngOnInit() {



  }

}
