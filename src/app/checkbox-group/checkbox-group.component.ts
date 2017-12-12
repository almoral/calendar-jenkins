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

  @Output() filterByDepartment: EventEmitter<any> = new EventEmitter<any>();
  @Output() filterByCategory: EventEmitter<any> = new EventEmitter<any>();

    // array of selected options to be pushed back to formGroup ---
    selOptions = [];
    channelArray = [];
    selectedCategories: Array<string> = [];
    selectedDepartments: Array<string> = [];
    propagateChange = ((_: any) => {});

    constructor(private dataStoreService: DataStoreService) {
    }

    objectCleanUp (id, channel) {
        return {'id': id, 'channels': channel }
    }

    checkboxGroupChange(val) {

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
    }

    onFilter() {
      // this.filter.emit('test');
    }

    public filterEvents(filterType: string, filterValue: string) {

        switch (filterType) {
          case 'category':
            this.filterByCategory.emit(filterValue);
            break;

          case 'department':
            this.filterByDepartment.emit(filterValue);
            break;

        }
    }

    private filterByCategories(category: string) {
      if (this.selectedCategories.indexOf(category) > -1) {
        this.selectedCategories = _.filter(this.selectedCategories, (item) => {
          return item !== category;
        });
      } else {
        this.selectedCategories.push(category);
      }

      this.dataStoreService.setCategoriesFilter(this.selectedCategories);
    }



    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched() {
    }

}
