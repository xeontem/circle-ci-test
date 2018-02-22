import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Pipe({
  name: 'translate'
})
export class TranslatePipeStub implements PipeTransform {
  transform = (value: any, lang: string) => Observable.of(value);
}
