import {Angulartics2GoogleTagManager} from 'angulartics2/gtm';
import {Component, HostListener, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'mdc-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class MDCCalendarComponent implements OnInit {

  constructor(angulartics2GTM: Angulartics2GoogleTagManager,
              router: Router) { }

  private resizeSubject = new Subject<number>();
  private resizeObservable = this.resizeSubject.asObservable().debounceTime(100);
  private viewDidChangeSubject = new BehaviorSubject<boolean>(false);
  private breakpoint = 600;

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width: number) {
    this.resizeSubject.next(width);
  }

  ngOnInit() {
      this.resizeObservable.subscribe(width => this.triggerViewChange(width));
  }

  private triggerViewChange(width: number) {

    if (this.router.url === '/calendar/grid' && width <= this.breakpoint) {
      this.viewDidChangeSubject.next(true);
      this.router.navigate([''], {skipLocationChange: true});
    }
    if (this.viewDidChangeSubject.getValue() && width > this.breakpoint) {
      this.router.navigate(['/calendar/grid'], {skipLocationChange: true});
      this.viewDidChangeSubject.next(false);
    }

  }

}
