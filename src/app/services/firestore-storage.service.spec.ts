import { TestBed, inject } from '@angular/core/testing';

import { FirestoreStorageService } from './firestore-storage.service';

xdescribe('FirestoreStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirestoreStorageService]
    });
  });

  it('should be created', inject([FirestoreStorageService], (service: FirestoreStorageService) => {
    expect(service).toBeTruthy();
  }));
});
