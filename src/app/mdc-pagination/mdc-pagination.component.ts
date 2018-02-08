import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DateService} from '../shared/services/date.service';

@Component({
  selector: 'mdc-pagination',
  templateUrl: './mdc-pagination.component.html',
  styleUrls: ['./mdc-pagination.component.css']
})
export class MdcPaginationComponent implements OnInit {

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

  constructor(private dateService: DateService) { }

  ngOnInit() {
  }

  getNextDay() {
    this.dateService.paginateByDay('forward');
  }

  getPreviousDay() {
    this.dateService.paginateByDay('backward');
  }

}
