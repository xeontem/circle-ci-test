import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FirestoreAuthService } from '../services/firestore-auth.service';
import { FirestoreStorageService } from '../services/firestore-storage.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { HeaderComponent } from './header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// -------------------------------- stubs --------------------------------
import {
  StoreStub,
  RouterStub,
  FirestoreAuthServiceStub,
  FirestoreStorageServiceStub,
} from '../../../tests/stubs';

// -------------------------------- material --------------------------------
import { MatCardModule } from '@angular/material';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        MatCardModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {provide: FirestoreAuthService, useClass: FirestoreAuthServiceStub },
        {provide: FirestoreStorageService, useClass: FirestoreStorageServiceStub },
        {provide: Router, useClass: RouterStub },
        {provide: Store, useClass: StoreStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
