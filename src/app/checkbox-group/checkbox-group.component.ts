import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DataStoreService} from '../shared/services/data-store.service';



@Component({
    selector: 'mdc-checkbox-group',
    templateUrl: './checkbox-group.component.html',
    styleUrls: ['./checkbox-group.component.css']
})
export class CheckboxGroupComponent  {

  @Input() optionsData = [];
  @Output() filter: EventEmitter<any> = new EventEmitter<any>();


    constructor(private dataStoreService: DataStoreService) {
    }

    public filterEvents(filterValue: string) {

      this.filter.emit(filterValue);

    }


}
