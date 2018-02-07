import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'internationalPhone'
})
export class InternationalPhonePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    if (!value) {
      return value;
    }

    return '+1-' + value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6);
  }

}
