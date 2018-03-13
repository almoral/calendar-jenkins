import { Component, OnInit } from '@angular/core';
import {Angulartics2GoogleTagManager} from 'angulartics2/gtm';

@Component({
  selector: 'mdc-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor(angulartics2GTM: Angulartics2GoogleTagManager) { }

  ngOnInit() {
  }

}
