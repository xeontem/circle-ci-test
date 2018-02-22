import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { TestBed, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { FirestoreAuthService } from './firestore-auth.service';
import { FcmMessagingService } from './firestore-messaging.service';
import {
  StoreStub,
  RouterStub,
  AngularFireAuthStub,
  AngularFirestoreStub,
  FcmMessagingServiceStub,
} from '../../../tests/stubs/';

describe('FirestoreAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FirestoreAuthService,
        {provide: AngularFireAuth, useClass: AngularFireAuthStub},
        {provide: AngularFirestore, useClass: AngularFirestoreStub},
        {provide: FcmMessagingService, useClass: FcmMessagingServiceStub},
        {provide: Store, useClass: StoreStub},
        {provide: Router, useClass: RouterStub},
      ]
    });
  });

  it('should be created', inject([FirestoreAuthService], (service: FirestoreAuthService) => {
    expect(service).toBeTruthy();
  }));
});
