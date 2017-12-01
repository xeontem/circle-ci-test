import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class FcmMessagingService implements OnInit {
  messaging = firebase.messaging();
  UID: string;
  currentMessage: BehaviorSubject<{}>  = new BehaviorSubject(null)

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth) { }

  getPermission() {
    this.messaging.requestPermission()
      .then(λ => this.messaging.getToken())
      .then(currentToken => {
        this.afAuth.authState
        .take(1)
        .filter(λ => !!λ)
        .subscribe(user => {
          this.UID = user.uid;
          const data = { [user.uid]: currentToken }
          this.afs.collection('FCMMessaging').add(data);
        })
      console.log('Notification permission granted.');
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
  }

  ngOnInit() {
    //------------------ receive messages -----------------
    this.messaging.onMessage((payload) => {
      console.log("Message received. ", payload);
      this.currentMessage.next(payload);
    });

    // this.messaging.onTokenRefresh(function() {
    //   this.messaging.getToken()
    //   .then(function(refreshedToken) {
    //     console.log('Token refreshed.');
    //     // Indicate that the new Instance ID token has not yet been sent to the
    //     // app server.
    //     setTokenSentToServer(false);
    //     // Send Instance ID token to app server.
    //     sendTokenToServer(refreshedToken);
    //     // ...
    //   })
    //   .catch(function(err) {
    //     console.log('Unable to retrieve refreshed token ', err);
    //     showToken('Unable to retrieve refreshed token ', err);
    //   });
    // });
  }

}
