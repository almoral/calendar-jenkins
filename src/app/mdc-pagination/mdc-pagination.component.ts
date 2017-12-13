import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'mdc-pagination',
  templateUrl: './mdc-pagination.component.html',
  styleUrls: ['./mdc-pagination.component.css']
})
export class MdcPaginationComponent implements OnInit {

  @Input() id: string;
  @Input() maxSize: number;
  @Output() pageChange: EventEmitter<number>;

  constructor() { }

  ngOnInit() {
  }

}
