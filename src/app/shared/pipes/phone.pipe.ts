import { Pipe, PipeTransform } from '@angular/core';

 @Pipe ({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, args?: string): any {
    if (!value) {
      return value;
    }

    return value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6);
  }
}
