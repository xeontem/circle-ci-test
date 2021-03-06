import { Component, ViewChild, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreAuthService } from '../services/firestore-auth.service';
import { FirestoreStorageService } from '../services/firestore-storage.service';
import { Store } from '@ngrx/store';

import { HeaderState } from '../reducers/header.reducer';
import { Logout } from '../actions/header.action';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

type HoverState = 'hovered' | 'not_hovered';
// import { logo } from '/assets/images/logo.svg';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('caption', [
      state('not_hovered', style({
        transform: 'scale(1)'
      })),
      state('hovered', style({
        transform: 'scale(1.2)'
      })),
      transition('hovered <=> not_hovered', animate('100ms ease-in'))
    ]),
    trigger('logo', [
      state('not_hovered', style({
        transform: 'rotate(0deg)'
      })),
      state('hovered', style({
        transform: 'rotate(360deg)'
      })),
      transition('hovered <=> not_hovered', animate('500ms ease-in'))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  // @ViewChild('logout1') logoutButton: ElementRef;
  // logoutSubscr$: Subscription;
  logoState: HoverState = 'not_hovered';
  captionState: HoverState = 'not_hovered';
  message: BehaviorSubject<{}>;
  constructor(
    // private cd: ChangeDetectorRef,
    public auth:    FirestoreAuthService,
    private fstorage: FirestoreStorageService,
    private router:  Router,
    private store:   Store<HeaderState>) { }

  ngOnInit() {

  }

  async login() {
    await this.auth.login();
    this.router.navigate(['/cources']);
    this.auth.isAuthenticated();
    // console.log('user authenticated? ', this.auth.isAuthenticated());

    // this.snackBar.open('login success', 'close', { duration: 2000 });
  }

  logout() {
    this.store.dispatch(new Logout());
    this.auth.logout();
    // this.snackBar.open('logged out', 'close', { duration: 2000 });
    // this.router.navigate(['/home'])
  }
}
