import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DateService} from '../shared/services/date.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'mdc-pagination',
  templateUrl: './mdc-pagination.component.html',
  styleUrls: ['./mdc-pagination.component.css']
})
export class MdcPaginationComponent implements OnInit, AfterViewInit {

  @Input() id: string;
  @Input() maxSize: number;
  @Input()
  get autoHide(): boolean {
    return this._autoHide;
  }
  set autoHide(value: boolean) {
    this._autoHide = !!value && <any>value !== 'false';
  }
  @Input() screenReaderPaginationLabel = 'Pagination';
  @Input() screenReaderPageLabel = 'page';
  @Input() screenReaderCurrentLabel = `You're on page`;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  private _autoHide = false;

  constructor(private dateService: DateService, private elementRef: ElementRef) { }

  ngOnInit() {

  }

  ngAfterViewInit() {

    // Create observable from click events in order to throttle API calls.
    const past = Observable.fromEvent(this.elementRef.nativeElement, 'click');
    past.filter((element: any) => element.target.id === 'previousDay')
      .throttleTime(700)
      .subscribe( () => this.getPreviousDay());

    const next = Observable.fromEvent(this.elementRef.nativeElement, 'click');
    next.filter((element: any) => element.target.id === 'nextDay')
      .throttleTime(700)
      .subscribe( () => this.getNextDay());
  }

  getNextDay() {
    this.dateService.getNextDay();
  }

  getPreviousDay() {
    this.dateService.getPreviousDay();
  }

}
