import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class FcmMessagingService implements OnInit {
  messaging = firebase.messaging();
  currentToken: string;
  UID: string;
  currentMessage: BehaviorSubject<{}>  = new BehaviorSubject(null)

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth) { }

  getPermission() {
    this.messaging.requestPermission()
      .then(λ => this.messaging.getToken())
      .then(currentToken => {
        console.log(currentToken);
        this.currentToken = currentToken;

        this.afAuth.authState
        .take(1)
        .filter(λ => !!λ)
        .subscribe(user => {
          this.UID = user.uid;
          this.afs.collection('FCMMessaging').add({ [user.uid]: currentToken });
        })
      console.log('Notification permission granted.');
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
  }

  receiveMessage() {
    this.messaging.onMessage(payload => {
      console.log('message received. ', payload);
      this.currentMessage.next(payload);
    })
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
