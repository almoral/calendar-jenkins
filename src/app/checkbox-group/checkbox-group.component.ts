import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'mdc-checkbox-group',
  templateUrl: 'checkbox-group.component.html',
  styleUrls: ['checkbox-group.component.css']
})
export class CheckboxGroupComponent implements OnInit {

  @Input()
  options: Array<Object>;

  @Input()
  currentSelectedOptions: Array<string>;


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

        this.optionsSelected.emit(this.currentSelectedOptions);
  }


}
