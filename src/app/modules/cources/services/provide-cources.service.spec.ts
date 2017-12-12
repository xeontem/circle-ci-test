import { TestBed, inject } from '@angular/core/testing';

import { ProvideEventsService } from './provide-events.service';

describe('ProvideEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProvideEventsService]
    });
  });

  it('should be created', inject([ProvideEventsService], (service: ProvideEventsService) => {
    expect(service).toBeTruthy();
  }));
});
