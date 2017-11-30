import { TestBed, inject } from '@angular/core/testing';

import { FetchEventsService } from './fetch-events.service';

describe('FetchEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchEventsService]
    });
  });

  it('should be created', inject([FetchEventsService], (service: FetchEventsService) => {
    expect(service).toBeTruthy();
  }));
});
