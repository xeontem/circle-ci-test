import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as RouterActions from '../actions/router.actions';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { RouterStateUrl } from '../tools/utils';
import 'rxjs/add/operator/switchMap';

import { FcmMessagingService } from './fcm-messaging.service';



interface User {
  uid: string;
  token: string;
  email: string;
  photoURL: string;
  displayName: string;
  favoriteColor?: string;
}

@Injectable()
export class FirestoreAuthService {
  user: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private    msg: FcmMessagingService,
    private    afs: AngularFirestore,
    private  store: Store<RouterStateUrl>
    private router: Router)
  {
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState.switchMap(user => user ?
      this.afs.doc<User>(`users/${user.uid}`).valueChanges() :
      Observable.of(null));
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    let user: User;
    return this.afAuth.auth.signInWithPopup(provider)
      .then(credential => user = credential.user)
      .then(user => this.msg.getPermission())
      .then(token => user.token = token || '')
      .then(mtoken => this.updateUserData(user));
    }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      token: user.token,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    return userRef.set(data);
  }

  logout(): void {
    this.afAuth.auth.signOut()
      .then(() => {
        // this.router.navigate(['/'])
        this.store.dispatch(new RouterActions.Go({
          path: ['/', { routeParam: 1 }],
          query: { page: 1 },
          extras: { replaceUrl: false }
        }));
      });
  }

  getUserInfo(): Observable<firebase.User> {
    return this.afAuth.authState;
  }

  isAuthenticated(): Observable<boolean> {
    return this.afAuth.authState.map(user => !!user)
  }

}
