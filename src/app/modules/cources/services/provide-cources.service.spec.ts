import { TestBed, inject } from '@angular/core/testing';

import { ProvideCourcesService } from './provide-cources.service';

describe('ProvideCourcesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvideCourcesService]
    });
  });

  it('should be created', inject([ProvideCourcesService], (service: ProvideCourcesService) => {
    expect(service).toBeTruthy();
  }));
});
