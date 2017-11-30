import { Pipe, PipeTransform } from '@angular/core';
import { FetchTranslateService } from '../services/fetch-translate.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {

  constructor(private translateService: FetchTranslateService) {}

  transform(value: any, lang: string, text: string) {
    let direction:string = 'en-' + lang;
    return this.translateService.getTranslate(value, direction).distinctUntilChanged();
  }

}
