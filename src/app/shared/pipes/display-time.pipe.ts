import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import {DateService} from "../services/date.service";

@Pipe({
  name: 'displayTime'
})
export class DisplayTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let formattedTime: string = moment(value).format(DateService.DISPLAY_TIME_FORMAT);
    return formattedTime;
  }

}
