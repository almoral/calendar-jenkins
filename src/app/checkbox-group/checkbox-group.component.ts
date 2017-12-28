import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
    selector: 'mdc-checkbox-group',
    templateUrl: './checkbox-group.component.html',
    styleUrls: ['./checkbox-group.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CheckboxGroupComponent),
            multi: true
        }
    ]
})

export class CheckboxGroupComponent implements ControlValueAccessor, OnInit {

isChecked = false;

  @Input() optionsData = [];
  @Input() disabled = false;
  @Input() resetCategories = false;
  @Output() selectItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  public makeSelection(selection) {
    this.selectItem.emit(selection);
  }

  // control value accessor interface ---
  writeValue(value: any) {
  }

  registerOnChange(fn) {
  }

  registerOnTouched() {
  }


  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit() {

  }

}
