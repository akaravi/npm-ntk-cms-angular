import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToIterablePipe'
})
export class MapToIterablePipe implements PipeTransform {
  transform(dict: any): any {
    const a = [];
    for (const key in dict) {
      if (dict.hasOwnProperty(key)) {
        a.push({ key, val: dict[key] });
      }
    }

    return a;
  }
}
