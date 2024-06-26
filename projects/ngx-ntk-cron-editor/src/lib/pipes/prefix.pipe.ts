import { Pipe, PipeTransform } from '@angular/core';

export const ngxTranslatePrefix = 'ngx-ntk-cron-editor';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  transform(value: string): string {
    return `${ngxTranslatePrefix}.${value}`;
  }

}
