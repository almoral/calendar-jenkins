import { Pipe, PipeTransform } from '@angular/core';
import {format} from "libphonenumber-js";

@Pipe({
  name: 'internationalPhone'
})
export class InternationalPhonePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) {
      return value;
    }

    return format(value, 'US', 'International').replace(/\s+/g, '-');
  }

}
