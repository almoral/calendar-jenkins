import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
  @Input() previousLabel: string = 'Previous';
  @Input() nextLabel: string = 'Next';
  @Input() screenReaderPaginationLabel: string = 'Pagination';
  @Input() screenReaderPageLabel: string = 'page';
  @Input() screenReaderCurrentLabel: string = `You're on page`;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  private _autoHide: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
