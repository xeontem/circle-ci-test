import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FcmMessagingService } from '../services/fcm-messaging.service';

import { AppComponent } from './app.component';

// -------------------------------- stubs --------------------------------
import {
  AppHeaderStubComponent,
  RouterOutletStubComponent,
  AppFooterStubComponent,
  FcmMessagingServiceStub,
} from '../../../tests/stubs';
// -------------------------------- material --------------------------------
import {
  MatButtonModule,
  MatMenuModule,
  MatSnackBarModule,

  MatSnackBar } from '@angular/material';

describe('PageNotFoundComponentComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AppHeaderStubComponent,
        RouterOutletStubComponent,
        AppFooterStubComponent,
      ],
      imports: [
        MatMenuModule,
        MatSnackBarModule,
        // MatButtonModule,
      ],
      providers: [
        {provide: FcmMessagingService, useClass: FcmMessagingServiceStub },
        // {provide: MatSnackBar, useClass: MatSnackBarStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
