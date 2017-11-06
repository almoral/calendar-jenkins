import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../shared/services/messages.service";
import {Observable} from "rxjs";

@Component({
  selector: 'mdc-calendar-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  errors$: Observable<String[]>

  constructor(private messagesService: MessagesService) {}

  ngOnInit() {

    this.errors$ = this.messagesService.errors$
    this.messagesService.error('there was a terrible error');

  }

  close() {
    this.messagesService.error();
  }

}
