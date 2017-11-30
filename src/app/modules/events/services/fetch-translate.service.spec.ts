import { TestBed, inject } from '@angular/core/testing';

import { FetchTranslateService } from './fetch-translate.service';

describe('FetchTranslateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchTranslateService]
    });
  });

  it('should be created', inject([FetchTranslateService], (service: FetchTranslateService) => {
    expect(service).toBeTruthy();
  }));
});
