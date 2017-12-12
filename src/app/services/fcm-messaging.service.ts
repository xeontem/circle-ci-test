import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class FcmMessagingService implements OnInit {
  messaging = firebase.messaging();
  // currentToken: string;
  // UID: string;
  currentMessage: BehaviorSubject<{}>  = new BehaviorSubject(null)

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth) { 
      
      this.messaging.onMessage(payload => {
        console.log("Message received. ", payload);
        this.currentMessage.next(payload);
      });
  
      this.messaging.onTokenRefresh(function() {
        this.messaging.getToken()
        .then(currentToken => {
          this.afAuth.authState
          .take(1)
          .filter(λ => !!λ)
          .subscribe(user => {
            this.afs.collection('users').doc(`${user.uid}`).update({token: currentToken});
          })
          console.log('Notification permission granted.');
        })
        .catch((err) => {
          console.log('Unable to get permission to notify.', err);
        });
    });
  }

  getPermission() {
    this.messaging.requestPermission()
      .then(λ => this.messaging.getToken())
      .then(currentToken => {
        // console.log(currentToken);
        // this.currentToken = currentToken;

        this.afAuth.authState
        .take(1)
        .filter(λ => !!λ)
        .subscribe(user => {
          // this.UID = user.uid;
          // this.afs.collection('FCMMessaging').doc(`${user.uid}`).set({token: currentToken});
          this.afs.collection('users').doc(`${user.uid}`).update({token: currentToken});
          // this.afs.collection('users').doc(`${user.uid}`).update({token: currentToken});
          // this.afs.doc(`users/${user.uid}`)
        })
        console.log('Notification permission granted.');
      })
      .catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
  }

  // receiveMessage() {
  //   this.messaging.onMessage(payload => {
  //     console.log('message received. ', payload);
  //     this.currentMessage.next(payload);
  //   })
  // }

  ngOnInit() {
    //------------------ receive messages -----------------
    
  }

}
