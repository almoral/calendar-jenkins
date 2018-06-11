import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {DataStoreService} from "../shared/services/data-store.service";


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
  public isFilteredBySingleDate = false;

  constructor(private dataStoreService: DataStoreService, private elementRef: ElementRef) { }

  ngOnInit() {
    //this.dateService.day$.subscribe( day => this.isFilteredBySingleDate = day !== '');
  }

  ngAfterViewInit() {

    // Create observable from click events in order to throttle API calls.
    const past = Observable.fromEvent(this.elementRef.nativeElement, 'click');
    past.filter((element: any) => element.target.id === 'previousDay')
      .throttleTime(700)
      .subscribe( () => {
        this.filterEventsByPreviousDate();
      });

    const next = Observable.fromEvent(this.elementRef.nativeElement, 'click');
    next.filter((element: any) => element.target.id === 'nextDay')
      .throttleTime(700)
      .subscribe( () => {
        this.filterEventsByNextDate();
      });
  }

  filterEventsByNextDate() {
    this.dataStoreService.setSelectedDateToNextDate();
  }

  filterEventsByPreviousDate() {
    this.dataStoreService.setSelectedDateToPreviousDate();
  }

}
