import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FcmMessagingService implements OnInit {
  private messaging = firebase.messaging();
  currentMessage: BehaviorSubject<{}>  = new BehaviorSubject(null);

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {
      this.messaging.onMessage(payload => {
        console.log('Message received. ', payload);
        this.currentMessage.next(payload);
      });

      this.messaging.onTokenRefresh(currentToken =>
        this.afAuth.authState
          .filter(λ => !!λ)
          .subscribe(user => this.afs.collection('users').doc(`${user.uid}`).update({token: currentToken})));
  }

  getPermission() {
    return this.messaging.requestPermission()
      .then(λ => this.messaging.getToken());
  }

  getPermissionAndUpdateToken() {
    return this.getPermission()
      .then(currentToken =>
        this.afAuth.authState
          .filter(λ => !!λ)
          .subscribe(user => this.afs.collection('users').doc(`${user.uid}`).update({token: currentToken})))
      .then(x => console.log('Notification permission granted.'))
      .catch((err) => console.log('Unable to get permission to notify.', err));
  }

  ngOnInit() { }

}
