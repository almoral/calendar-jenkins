import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'displayTime'
})
export class DisplayTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let formattedTime: string = moment(value).format("h:mm A");
    return formattedTime;
  }

}
