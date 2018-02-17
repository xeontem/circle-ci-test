import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ProvideCourcesService } from './provide-cources.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Store } from '@ngrx/store';
import { AngularFirestoreStub, StoreStub } from '../../../../../tests/stubs';

describe('ProvideCourcesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        ProvideCourcesService,
        HttpClient,
        {provide: AngularFirestore, useClass: AngularFirestoreStub },
        {provide: Store, useClass: StoreStub }
        ]
    });
  });

  it('should be created', inject([ProvideCourcesService], (service: ProvideCourcesService) => {
    expect(service).toBeTruthy();
  }));
});
