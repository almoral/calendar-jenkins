import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'mdc-checkbox2-group',
  templateUrl: './checkbox2-group.component.html',
  styleUrls: ['./checkbox2-group.component.css']
})
export class Checkbox2GroupComponent implements OnInit {

  @Input()
  options: Array<Object>;

  @Input()
  currentSelectedOptions:Array<string>;


  @Output()
  optionsSelected = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  selectOption(option:string) {

    if ( this.currentSelectedOptions.indexOf(option) === -1) {

      this.currentSelectedOptions.push(option);
    } else {
      _.remove(this.currentSelectedOptions, selectedOption => selectedOption === option);
    }


    this.optionsSelected.next(this.currentSelectedOptions);
  }


}
