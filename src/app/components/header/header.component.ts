import { Component, ViewChild, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
import { FirestoreAuthService } from '../../services/firestore-auth.service';
import { FcmMessagingService } from '../../services/fcm-messaging.service';
import { FirestoreStorageService } from '../../services/firestore-storage.service';
import { Store } from '@ngrx/store';

import { HeaderState } from '../../reducers/header.reducer';
import { Logout } from '../../actions/header.action';
import { Observable, Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

// import { logo } from '/assets/images/logo.svg';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  // @ViewChild('logout1') logoutButton: ElementRef;
  // logoutSubscr$: Subscription;
  message: BehaviorSubject<{}>;
  constructor(
    // private cd: ChangeDetectorRef,
    private auth:    FirestoreAuthService,
    private fsmmsg:  FcmMessagingService,
    private fstorage: FirestoreStorageService,
    private router:  Router,
    public snackBar: MatSnackBar,
    private store:   Store<HeaderState>) { }

  ngOnInit() {
    this.fsmmsg.getPermission();
    this.fsmmsg.currentMessage
      .subscribe(payload => payload && this.snackBar.open(payload['notification'].body, 'ok', { duration: 2000 }));
  }

  openSnackBar(message: string, action: string) { }

  async login() {
    await this.auth.googleLogin();
    this.router.navigate(['/cources']);
    // this.snackBar.open('login success', 'close', { duration: 2000 });
  }

  logout() {
    this.store.dispatch(new Logout());
    this.auth.signOut();
    // this.snackBar.open('logged out', 'close', { duration: 2000 });
    // this.router.navigate(['/home'])
  }
}
