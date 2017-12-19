import { Pipe, PipeTransform } from '@angular/core';
import { getInt, getFraction, toHalfHour } from '../../../tools/lambda';
@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return `${getInt(value)}h ${toHalfHour(getFraction(value))}min`;
  }

}
