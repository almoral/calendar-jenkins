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

  @Input() optionsData = [];
  @Input() disabled = false;
  @Output() selectItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  public makeSelection(selection: string) {
    this.selectItem.emit(selection);
  }

  // control value accessor interface ---
  writeValue(values: any) {
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
