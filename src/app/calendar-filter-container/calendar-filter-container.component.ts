import {Component, EventEmitter, OnInit} from '@angular/core';
import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'mdc-calendar-filter-container',
  templateUrl: './calendar-filter-container.component.html',
  styleUrls: ['./calendar-filter-container.component.css']
})
export class CalendarFilterContainerComponent implements OnInit {

  constructor() { }

  modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }
  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  ngOnInit() {
  }

}
