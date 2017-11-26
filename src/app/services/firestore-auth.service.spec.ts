import { TestBed, inject } from '@angular/core/testing';

import { FirestoreAuthService } from './firestore-auth.service';

describe('FirestoreAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreAuthService]
    });
  });

  it('should be created', inject([FirestoreAuthService], (service: FirestoreAuthService) => {
    expect(service).toBeTruthy();
  }));
});
