import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/pluck';

@Injectable()
export class FetchTranslateService {
  url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=
         trnsl.1.1.20170821T101537Z.e13069e8f91b8da4.174b7a7ef315d6893cbb86dc9b61352e9f702a73`;

  constructor(private http: HttpClient) {}

  getTranslate(text: string, direction: string): any {
    return this.http.get(this.url + '&text=' + text + '&lang=' + direction)
      .pluck('text')
      .pluck('0');
  }
}
