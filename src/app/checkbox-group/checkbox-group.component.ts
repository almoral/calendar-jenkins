import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import * as _ from 'lodash';

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

    // array of selected options to be pushed back to formGroup ---
    selOptions = [];
    channelArray = [];

    constructor() {
    }

    objectCleanUp (id, channel) {
        return {'id': id, 'channels': channel }
    }

    checkboxGroupChange(val) {

        // this.channelArray = [];
        // // loop through ALL AVAILABLE channel options and set channel selection ---
        // for (const cc of this.optionsData[0].channels) {
        //     this.channelArray.push(cc.id);
        // }

        this.selOptions = [];
        this.optionsData.forEach((item, index) => {
            console.log('category option: ', item);
            if (item.checked === true) {

                this.selOptions.push(this.objectCleanUp(item. id, this.channelArray));
            }

        });

        // push values out to formGroup ---
        this.propagateChange(this.selOptions);

    }

    // control value assessor interface ---
    writeValue(values: any) {

        // if (_.isNil(values)) {
        //     return false;
        // }
        //
        // for (const cbOption of this.optionsData) {
        //     if (values.find(x => x.id === cbOption.id)) {
        //         cbOption.checked = true;
        //         this.selOptions.push(cbOption);
        //     } else {
        //         cbOption.checked = false;
        //     }
        // }
    }

    propagateChange = (_: any) => {
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {
    }

    // end control value assessor interface ---

}