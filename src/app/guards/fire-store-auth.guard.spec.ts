import { TestBed, async, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FirestoreAuthService } from '../services/firestore-auth.service';

//-------------------------------- stubs --------------------------------
import {
  RouterStub,
  FirestoreAuthServiceStub,
} from '../../../tests/stubs';

import { FireStoreAuthGuard } from './fire-store-auth.guard';

describe('FireStoreAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FireStoreAuthGuard,
        {provide: Router, useClass: RouterStub },
        {provide: FirestoreAuthService, useClass: FirestoreAuthServiceStub },
      ]
    });
  });

  it('should ...', inject([FireStoreAuthGuard], (guard: FireStoreAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
