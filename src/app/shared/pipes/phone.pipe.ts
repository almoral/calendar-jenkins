import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'libphonenumber-js';

 @Pipe ({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, args?: string): any {
    if (!value) {
      return value;
    }

    // set textMask mask for telephone number...
    // this.telephoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

    return format(value, 'US', 'National');
  }
}
