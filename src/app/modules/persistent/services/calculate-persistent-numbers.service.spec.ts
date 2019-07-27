import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CalculatePersistentNumbersService } from './calculate-persistent-numbers.service';

describe('CalculatePersistentNumbersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [CalculatePersistentNumbersService]
    });
  });

  it('should be created', inject([CalculatePersistentNumbersService], (service: CalculatePersistentNumbersService) => {
    expect(service).toBeTruthy();
  }));
});
