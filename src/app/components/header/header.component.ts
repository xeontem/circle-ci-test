import { Component, ViewChild, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreAuthService } from '../../services/firestore-auth.service';
import { Store } from '@ngrx/store';

import { HeaderState } from '../../reducers/header.reducer';
import { Logout } from '../../actions/header.action';
import { Observable, Subscription } from 'rxjs';

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

  constructor(
    public auth: FirestoreAuthService,
    private router: Router,
    // private cd: ChangeDetectorRef,
    private store: Store<HeaderState>) { }

  ngOnInit() {
    // this.auth.map(x => console.log(x));
    // this.logoutSubscr$ = Observable.fromEvent(this.logoutButton.nativeElement, 'click')
    //   .subscribe(this.auth.signOut);
      // console.log(this.logoutButton);

  }

  async login() {
    await this.auth.googleLogin();
    this.router.navigate(['/cources']);
  }

  logout() {
    this.store.dispatch(new Logout());
    this.auth.signOut();
    // this.router.navigate(['/home'])
  }
}
