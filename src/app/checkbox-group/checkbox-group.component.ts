import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
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

export class CheckboxGroupComponent implements ControlValueAccessor {

  checkedValue: boolean;

  @Input() optionsData = [];
  @Input() disabled = false;
  @Input() isChecked = false;
  @Output() selectItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  public makeSelection(selection) {
    this.selectItem.emit({event: event, selection: selection});
  }

  // control value accessor interface ---
  writeValue(value: boolean) {
    this.isChecked = value;
  }

  registerOnChange(fn) {
  }

  registerOnTouched() {
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
