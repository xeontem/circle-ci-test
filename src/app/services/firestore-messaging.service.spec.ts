import * as firebase from 'firebase';
import { TestBed, inject } from '@angular/core/testing';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { FcmMessagingService } from './firestore-messaging.service';
import { AngularFireAuthStub, AngularFirestoreStub } from '../../../tests/stubs/';

firebase.initializeApp({
  messagingSenderId: 'test-id'
});

describe('FcmMessagingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FcmMessagingService,
        {provide: AngularFireAuth, useClass: AngularFireAuthStub},
        {provide: AngularFirestore, useClass: AngularFirestoreStub},
      ]
    });
  });

  it('should be created', inject([FcmMessagingService], (service: FcmMessagingService) => {
    expect(service).toBeTruthy();
  }));
});
