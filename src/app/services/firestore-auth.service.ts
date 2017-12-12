import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';



interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

@Injectable()
export class FirestoreAuthService {
  user: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router)
  {
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState.switchMap(user => user ?
      this.afs.doc<User>(`users/${user.uid}`).valueChanges() :
      Observable.of(null));
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then(credential => {
        // console.log(credential);

// var key = 'AIzaSyBZKj2TXF1S12liuUSV7uILNqqzq1jnQlc';
// var to = 'ddDv99L_4q8:APA91bGxknc3gfAXOfzxUXxEIWOwTl5CT01YnTg_Z520eO9cwAYtuH8C6ZFEHviKyQrDNyvtQn_I0SRKN3eHrKZHRInihNO6kqpyGppz5gPAH6JDjKQYXUSh0Z5jRqcXNxggIcdCM5w8';
// var notification = {
//   'title': 'Portugal vs. Denmark',
//   'body': '5 to 1',
//   'icon': 'firebase-logo.png',
//   'click_action': 'http://localhost:8081'
// };

// fetch('https://fcm.googleapis.com/fcm/send', {
//   'method': 'POST',
//   'headers': {
//     'Authorization': 'key=' + key,
//     'Content-Type': 'application/json'
//   },
//   'body': JSON.stringify({
//     'notification': notification,
//     'to': to
//   })
// }).then(function(response) {
//   console.log(response);
// }).catch(function(error) {
//   console.error(error);
// })

        this.updateUserData(credential.user)
      })
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    return userRef.set(data)
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
        this.router.navigate(['/']);
    });
  }
}


// curl -X POST -H "Authorization: key=AIzaSyBZKj2TXF1S12liuUSV7uILNqqzq1jnQlc" -H "Content-Type: application/json" -d '{
//   "notification": {
//     "title": "Portugal vs. Denmark",
//     "body": "5 to 1",
//   },
//   "to": "fjkXdR05TEw:APA91bHVjRfFaPv2fMhHB_xcpxr7uzNler78ZTei59C0MhEHii62OxiReMXFvbDimi8S7NrMSvCVG8IdLC-lAU7lgEQDJQn6Sn_wu2OfYrfcA3-P8m-CfTGGJhfxtaft2BcVsflpAH3W"
// }' "https://fcm.googleapis.com/fcm/send"
