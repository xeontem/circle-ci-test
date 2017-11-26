import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import 'rxjs/add/operator/map';
export interface Cource { 
  title: string;
  duration: string;
  date: Date;
  description: string;
}
@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss']
})
export class CourcesComponent implements OnInit {
  courcesCollection: AngularFirestoreCollection<Cource>;
  cources: Observable<Cource[]>;
  searchCourceForm: FormGroup;
  hint: string = 'title of cource';

  constructor(
    private afs: AngularFirestore,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // recieve collection from firestore
    this.courcesCollection = this.afs.collection('cources');
    this.cources = this.courcesCollection.valueChanges();
    this.cources.subscribe(console.log);

    // search cource form
    this.searchCourceForm = this.fb.group({
      predicate: ['', Validators.required]
    });
  }

  searchCource(searchCourceForm) {
    if(searchCourceForm.predicate) {
      this.courcesCollection = this.afs.collection('cources', ref => 
        ref.where('title', '==', searchCourceForm.predicate));
      this.cources = this.courcesCollection.valueChanges();
    } else {
      this.courcesCollection = this.afs.collection('cources');
      this.cources = this.courcesCollection.valueChanges();
    }
  }

}
