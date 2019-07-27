import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CalculatePersistentNumbersService {

  constructor(
    private http:  HttpClient,
  ) { }

  calculate(start, end?, zeros?) {
    return this.http.post('https://us-central1-circle-ci-test-31dfc.cloudfunctions.net/calculatePersistNumbers', { start, end, zeros });
  }
}
