import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'i18nDate'
})
export class I18nDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
