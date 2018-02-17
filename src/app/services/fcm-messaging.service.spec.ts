import { TestBed, inject } from '@angular/core/testing';

import { FcmMessagingService } from './fcm-messaging.service';

xdescribe('FcmMessagingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FcmMessagingService]
    });
  });

  it('should be created', inject([FcmMessagingService], (service: FcmMessagingService) => {
    expect(service).toBeTruthy();
  }));
});
