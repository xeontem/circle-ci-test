import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class FirestoreStorageService implements OnInit {
  storage: firebase.storage.Reference;
  constructor() { }

  ngOnInit() {
    this.storage = firebase.storage().ref().child('');
    this.storage.getDownloadURL().then(url => console.dir(url))
  }
}


// import { Component, Inject } from '@angular/core';
// import { FirebaseApp } from 'angularfire2';
// import 'firebase/storage';

// @Component({
//   template: '<img [src]="image">'
// })
// export class RecipesComponent {
//   image: string;
//   constructor(firebaseApp: FirebaseApp) {
//     const storageRef = firebaseApp.storage().ref().child('images/image.png');
//     storageRef.getDownloadURL().then(url => this.image = url);
//   }
// }
