import { TestBed, async, inject } from '@angular/core/testing';

import { FireStoreAuthGuard } from './fire-store-auth.guard';

describe('FireStoreAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireStoreAuthGuard]
    });
  });

  it('should ...', inject([FireStoreAuthGuard], (guard: FireStoreAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
