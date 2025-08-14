import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mapToIterablePipe',
  standalone: false
})
export class MapToIterablePipe implements PipeTransform {
  transform(dict: any) {
    const a = [];
    for (const keyItem in dict) {
      if (dict.hasOwnProperty(keyItem)) {
        a.push({ key: keyItem, val: dict[keyItem] });
      }
    }

    return a;
  }
}

