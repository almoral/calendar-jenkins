import {Component, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import * as _ from 'lodash';
import {DataStoreService} from '../shared/services/data-store.service';



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


  @Output() filter: EventEmitter<any> = new EventEmitter<any>();

    // array of selected options to be pushed back to formGroup ---
    selOptions = [];
    channelArray = [];
    propagateChange = ((_: any) => {});

    constructor(private dataStoreService: DataStoreService) {
    }

    objectCleanUp (id, channel) {
        return {'id': id, 'channels': channel }
    }

    checkboxGroupChange(val) {

        this.selOptions = [];
        this.optionsData.forEach((item, index) => {
            if (item.checked === true) {

                this.selOptions.push(this.objectCleanUp(item. id, this.channelArray));
            }

        });

        // push values out to formGroup ---
        this.propagateChange(this.selOptions);

    }

    // control value assessor interface ---
    writeValue(values: any) {
    }

    public filterEvents(filterValue: string) {

      this.filter.emit(filterValue);

    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {
    }

}
