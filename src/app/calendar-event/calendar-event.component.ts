import {Component, OnInit, Input} from '@angular/core';
import {MdcEvent} from '../shared/models/mdc-event';
import * as $ from 'jquery';
import {environment} from '../../environments/environment';
import {WindowRef} from '../shared/services/window-ref.service';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {delay, skip} from 'rxjs/operators';

@ Component({
  selector: 'mdc-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent implements OnInit {

  @ Input()
  event: MdcEvent;
  displayFullView = environment.displayFullView;
  printItem = new BehaviorSubject<boolean>(false);
  $printItem = this.printItem.asObservable();

  constructor(private winRef: WindowRef) { }

  ngOnInit() {

    this.$printItem
      .pipe(
        skip(1),
        delay(1000)
      )
      .subscribe( value => {

        if (value) {
          this.winRef.nativeWindow.print();
        }
      });

  }

  public showHide(event): void {

    $(event.currentTarget).next().slideToggle();
    $(event.currentTarget).toggleClass('active');

    // For ADA Compliance
    let expanded = $(event.currentTarget).next().attr('aria-expanded');

    if (expanded === 'true') {
      expanded = 'false';
      this.printItem .next(false);
    } else {
      expanded  = 'true';
    }

    $(event.currentTarget).next().attr('aria-expanded', expanded);
  }

  public printEvent(): void {
    this.printItem.next(true);
  }

}
