import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable()
export class FirestoreStorageService implements OnInit {
  storage: firebase.storage.Reference;
  constructor() { }
  
  ngOnInit() {
    this.storage = firebase.storage().ref();
  }
}
